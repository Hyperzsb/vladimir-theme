<template>
    <b-container tag="section" fluid>
        <b-row class="pt-0 pt-md-4 pb-4">
            <b-col cols="10" offset="1" md="8" offset-md="2">
                <div v-html="markDownText" v-highlight class="markdown-container">
                </div>
            </b-col>
        </b-row>
        <b-sidebar v-if="config.components.documentation.toc"
                   title="Content" shadow backdrop backdrop-variant="dark" :visible="sidebarVisible">
            <div id="toc-container" v-html="tocHtml" class="pl-3"></div>
        </b-sidebar>
        <div class="fixed-toolbar">
            <scroll-to-top v-if="config.components.demo.scrollToTop"
                           class="mb-3"/>
            <div v-if="config.components.demo.toc"
                 class="sidebar-toggle" :class="sidebarToggleColorClass" @click="sidebarVisible=!sidebarVisible">
                <b-icon icon="justify" class="rounded-circle p-2 custom-icon" :class="iconColorClass"></b-icon>
            </div>
        </div>
    </b-container>
</template>

<script>

import Vue from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'

import {mapState, mapMutations} from 'vuex'

import ScrollToTop from "@/components/ScrollToTop";

Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})

let externalTocHtml = '';

export default {
    name: "index",
    data() {
        return {
            markDownText: '',
            sidebarVisible: false
        }
    },
    computed: {
        tocHtml: function () {
            return externalTocHtml;
        },
        iconColorClass: function () {
            return {
                'default-icon-color': true
            }
        },
        sidebarToggleColorClass: function () {
            return {
                'default-sidebar-toggle-color': true
            }
        },
        ...mapState([
            'config'
        ])
    },
    methods: {
        ...mapMutations([
            'changeNavItem'
        ])
    },
    created() {
        //Change nav item activity
        this.changeNavItem(1);

        // markdown-it plugins
        const markdownItAbbr = require('markdown-it-abbr');
        const markdownItAttrs = require('markdown-it-attrs');
        const markdownItClass = require('@toycode/markdown-it-class');
        const markdownItContainer = require('markdown-it-container');
        const markdownItDeflist = require('markdown-it-deflist');
        const markdownItEmoji = require('markdown-it-emoji');
        const markdownItFootnote = require('markdown-it-footnote');
        const markdownItIns = require('markdown-it-ins');
        const markdownItMark = require('markdown-it-mark');
        const markdownItSub = require('markdown-it-sub');
        const markdownItSup = require('markdown-it-sup');

        // Class Mapping for markdownItClass
        const classMapping = {
            code: 'markdown-code',
            h1: ['markdown-h1', 'default-markdown-h-color'],
            h2: ['markdown-h2', 'default-markdown-h-color'],
            h3: ['markdown-h3', 'default-markdown-h-color'],
            h4: ['markdown-h4', 'default-markdown-h-color'],
            h5: ['markdown-h5', 'default-markdown-h-color'],
            h6: ['markdown-h6', 'default-markdown-h-color'],
            p: ['markdown-p', 'default-markdown-p-color'],
            a: ['markdown-a', 'default-markdown-a-color'],
            ul: ['markdown-ul', 'default-markdown-list-color'],
            ol: ['markdown-ol', 'default-markdown-list-color'],
            li: ['markdown-li', 'default-markdown-list-color'],
            hr: ['markdown-hr', 'default-markdown-hr-color'],
            img: 'markdown-img',
            table: ['markdown-table', 'default-markdown-table-color'],
            blockquote: ['markdown-blockquote', 'default-markdown-blockquote-color'],
            strong: 'default-markdown-strong-color'
        };

        // markdown-it config
        const markDownIt = require('markdown-it')({
            html: true,
            linkify: false,
            xhtmlOut: true,
            typographer: true,
            highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return '<pre class="hljs markdown-block-code"><code>' +
                            hljs.highlight(lang, str, true).value +
                            '</code></pre>';
                    } catch (__) {
                        return '<pre class="hljs markdown-block-code"><code>' + markDownIt.utils.escapeHtml(str) + '</code></pre>';
                    }
                }
                return '<pre class="hljs markdown-block-code"><code>' + markDownIt.utils.escapeHtml(str) + '</code></pre>';
            }
        }).use(markdownItAbbr)
            .use(markdownItAttrs)
            .use(markdownItClass, classMapping)
            .use(markdownItContainer, 'hint')
            .use(markdownItContainer, 'warning')
            .use(markdownItContainer, 'fatal')
            .use(markdownItDeflist)
            .use(markdownItEmoji)
            .use(markdownItFootnote)
            .use(markdownItIns)
            .use(markdownItMark)
            .use(markdownItSub)
            .use(markdownItSup);

        // If toc is enabled
        if (this.config.components.documentation.toc) {
            const markdownItTocAndAnchor = require('markdown-it-toc-and-anchor').default;
            markDownIt.use(markdownItTocAndAnchor, {
                tocClassName: 'markdown-toc',
                anchorLinkSymbol: '¶',
                anchorLinkBefore: false,
                anchorClassName: 'markdown-a markdown-anchor default-markdown-a-color',
            });
            markDownIt.set({
                tocCallback: function (tocMarkdown, tocArray, tocHtml) {
                    externalTocHtml = tocHtml;
                }
            });
        }

        // Render the markdown file
        this.markDownText = markDownIt.render(require('@/assets/markdown/demo.md'));
    },
    mounted() {
        // This part of functions are aimed to simulate anchor behavior by using click event handler

        // Footnotes' click event handler

        // Footnote references links
        let footnoteRefLinks = document.getElementsByClassName('footnote-ref');
        for (let i = 0; i < footnoteRefLinks.length; i++) {
            let link = footnoteRefLinks.item(i).children[0];
            link.onclick = function () {
                window.scrollTo({
                    top: document.getElementById(link.attributes['href'].value.substr(1)).offsetTop,
                    behavior: "smooth"
                });
                return false;
            }
        }

        // Footnote back-to references links
        let footnoteBackRefLinks = document.getElementsByClassName('footnote-backref');

        for (let i = 0; i < footnoteBackRefLinks.length; i++) {
            let link = footnoteBackRefLinks.item(i);
            link.onclick = function () {
                // document.getElementById(link.attributes['href'].value.substr(1)).scrollIntoView({
                //     behavior: 'smooth',
                //     block: 'center'
                // })
                window.scrollTo({
                    top: document.getElementById(link.attributes['href'].value.substr(1)).parentNode.offsetTop,
                    behavior: "smooth"
                });
                return false;
            }
        }

        // Toc's click event handler

        // Define recursive function for event listener adding
        function addTocClickListener(node) {
            if (node.tagName.toString() === 'A') {
                node.onclick = function () {
                    window.scrollTo({
                        top: document.getElementById(node.attributes['href'].value.substr(1)).offsetTop,
                        behavior: "smooth"
                    });
                    return false;
                }
                return null;
            }

            for (let i = 0; i < node.children.length; i++)
                addTocClickListener(node.children[i]);
        }

        // If toc is enabled
        if (this.config.components.documentation.toc) {
            let anchors = document.getElementsByClassName('markdown-anchor');
            for (let i = 0; i < anchors.length; i++) {
                anchors.item(i).onclick = function () {
                    window.scrollTo({
                        top: document.getElementById(anchors.item(i).attributes['href'].value.substr(1)).offsetTop,
                        behavior: "smooth"
                    });
                    return false;
                }
            }

            addTocClickListener(document.getElementById('toc-container'));
        }
    },
    components: {
        ScrollToTop
    }
}

</script>

<style lang="scss" scoped>

@import "src/assets/scss/variables";

.default-icon-color {
    color: $default-base-color;
    background-color: rgba($default-link-color, .7);
}

.default-sidebar-toggle-color {
    box-shadow: 0 0 0.7rem $default-shadow-color;

    &:hover {
        box-shadow: 0 0 1.3rem $default-shadow-color;
    }

    &:active {
        box-shadow: 0 0 0.7rem $default-shadow-color;
    }
}

.markdown-container {
    line-height: 2rem;

    @include mobile {
        line-height: 1.8rem;
    }
}

.sidebar-toggle {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    transition: 0.25s;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 50%;
        backdrop-filter: blur(2px);
        z-index: -1;
    }
}

.custom-icon {
    height: 3rem;
    width: 3rem;
}

</style>
