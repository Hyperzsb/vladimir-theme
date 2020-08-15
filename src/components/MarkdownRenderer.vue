<template>
    <div>
        <div v-html="markDownText" v-highlight class="markdown-container" :class="markdownColorClass"></div>
        <b-sidebar v-if="this.toc" id="toc-sidebar" title="Content" shadow backdrop backdrop-variant="dark">
            <div id="toc-container" v-html="tocHtml" class="pl-3"></div>
        </b-sidebar>
    </div>
</template>

<script>

import Vue from 'vue';
import {mapState} from 'vuex';
import hljs from 'highlight.js';

Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    });
});

function loadStylesheet(url) {
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    link.setAttribute('name', 'hljs-stylesheet');
    head.appendChild(link);
}

function removeStylesheet() {
    let head = document.getElementsByTagName('head')[0];
    for (let i = 0; i < head.children.length; i++)
        if (head.children[i].tagName === 'LINK' && head.children[i].getAttribute('name') === 'hljs-stylesheet')
            head.removeChild(head.children[i]);
}

let externalTocHtml = '';

export default {
    name: "MarkdownRenderer",
    props: {
        src: String,
        toc: Boolean
    },
    data() {
        return {
            markdownItRenderer: null,
            markdownItClassLoader: null,
            markDownText: '',
            sidebarVisible: false
        }
    },
    watch: {
        src: function () {
            this.markDownText = this.markdownItRenderer.render(this.src);
        },
        theme: function () {
            removeStylesheet();
            if (this.theme === 'default')
                loadStylesheet('css/atom-one-light.css');
            else
                loadStylesheet('css/atom-one-dark.css');

            this.markdownItRenderer.use(this.markdownItClassLoader, this.classMapping);
            this.markDownText = this.markdownItRenderer.render(this.src);
        }
    },
    computed: {
        classMapping: function () {
            if (this.theme === 'default')
                return {
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
                    dl: 'default-markdown-list-color',
                    li: ['markdown-li', 'default-markdown-list-color'],
                    img: 'markdown-img',
                    table: ['markdown-table', 'default-markdown-table-color'],
                    blockquote: ['markdown-blockquote', 'default-markdown-blockquote-color'],
                    strong: 'default-markdown-strong-color'
                };
            else
                return {
                    code: 'markdown-code',
                    h1: ['markdown-h1', 'dark-markdown-h-color'],
                    h2: ['markdown-h2', 'dark-markdown-h-color'],
                    h3: ['markdown-h3', 'dark-markdown-h-color'],
                    h4: ['markdown-h4', 'dark-markdown-h-color'],
                    h5: ['markdown-h5', 'dark-markdown-h-color'],
                    h6: ['markdown-h6', 'dark-markdown-h-color'],
                    p: ['markdown-p', 'dark-markdown-p-color'],
                    a: ['markdown-a', 'dark-markdown-a-color'],
                    ul: ['markdown-ul', 'dark-markdown-list-color'],
                    ol: ['markdown-ol', 'dark-markdown-list-color'],
                    dl: 'dark-markdown-list-color',
                    li: ['markdown-li', 'dark-markdown-list-color'],
                    img: 'markdown-img',
                    table: ['markdown-table', 'dark-markdown-table-color'],
                    blockquote: ['markdown-blockquote', 'dark-markdown-blockquote-color'],
                    strong: 'dark-markdown-strong-color'
                };
        },
        tocHtml: function () {
            return externalTocHtml;
        },
        markdownColorClass: function () {
            if (this.theme === 'default')
                return {
                    'default-markdown-color': true
                };
            else
                return {
                    'dark-markdown-color': true
                };
        },
        ...mapState([
            'theme'
        ])
    },
    created() {
        removeStylesheet();
        if (this.theme === 'default')
            loadStylesheet('css/atom-one-light.css');
        else
            loadStylesheet('css/atom-one-dark.css');

        // markdown-it plugins
        const markdownItAbbr = require('markdown-it-abbr');
        const markdownItAttrs = require('markdown-it-attrs');
        const markdownItClass = require('@toycode/markdown-it-class');
        this.markdownItClassLoader = markdownItClass;
        const markdownItContainer = require('markdown-it-container');
        const markdownItDeflist = require('markdown-it-deflist');
        const markdownItEmoji = require('markdown-it-emoji');
        const markdownItFootnote = require('markdown-it-footnote');
        const markdownItIns = require('markdown-it-ins');
        const markdownItMark = require('markdown-it-mark');
        const markdownItSub = require('markdown-it-sub');
        const markdownItSup = require('markdown-it-sup');

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
            .use(markdownItClass, this.classMapping)
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
        if (this.toc) {
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

        this.markdownItRenderer = markDownIt;
        // Render the markdown file
        this.markDownText = markDownIt.render(this.src);
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
            };
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
                };
                return null;
            }

            for (let i = 0; i < node.children.length; i++)
                addTocClickListener(node.children[i]);
        }

        // If toc is enabled
        if (this.toc) {
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
    }
}
</script>

<style lang="scss" scoped>

@import "src/assets/scss/variables";

.markdown-container {
    line-height: 2rem;

    @include mobile {
        line-height: 1.8rem;
    }
}

</style>
