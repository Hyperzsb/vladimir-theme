<template>
    <b-container tag="section" fluid>
        <b-row class="pt-4 pb-4">
            <b-col cols="10" offset="1" md="8" offset-md="2">
                <div v-html="markDownText" v-highlight class="markdown-container">
                </div>
            </b-col>
        </b-row>
        <div>
            {{ tocList }}
        </div>
    </b-container>
</template>

<script>

import Vue from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
import {mapMutations} from 'vuex'

Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})

export default {
    name: "index",
    data() {
        return {
            markDownText: '',
            tocList: ''
        }
    },
    methods: {
        ...mapMutations([
            'changeNavItem'
        ])
    },
    created() {
        this.changeNavItem(2);
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
        const markdownItTocAndAnchor = require('markdown-it-toc-and-anchor').default;

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
            .use(markdownItContainer, 'warning')
            .use(markdownItDeflist)
            .use(markdownItEmoji)
            .use(markdownItFootnote)
            .use(markdownItIns)
            .use(markdownItMark)
            .use(markdownItSub)
            .use(markdownItSup)
            .use(markdownItTocAndAnchor, {
                anchorLinkSymbol: '¶',
                anchorLinkBefore: false,
                anchorClassName: 'markdown-anchor default-markdown-a-color',
            });

        markDownIt.set({
            tocCallback: function (tocMarkdown, tocArray, tocHtml) {
                console.log(tocHtml);
            }
        });

        this.markDownText = markDownIt.render(require('@/assets/markdown/demo.md'));
    },
    mounted() {
        let anchors = document.getElementsByClassName('markdown-anchor');
        for (let i = 0; i < anchors.length; i++) {
            anchors.item(i).onclick = function () {
                window.scrollTo({
                    top: anchors.item(i).offsetTop,
                    behavior: "smooth"
                });
                return false;
            }
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
