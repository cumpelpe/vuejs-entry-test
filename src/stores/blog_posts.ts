export default {
  "posts": [
    {
      "id": 1,
      "title": "Lorem",
      "desc": "Sint nulla excepteur aliquip dolore. Incididunt cillum ipsum dolore elit non eiusmod consectetur. Ea voluptate proident elit duis est veniam enim ipsum sunt laboris nulla ut. Ex esse non ut sit velit in velit cupidatat nostrud. Pariatur irure labore dolore ea consectetur amet sunt cillum. Aliqua id fugiat aute elit id occaecat amet ullamco id adipisicing. Minim tempor sit ex velit proident veniam reprehenderit fugiat consequat sint elit pariatur ullamco est.",
      "img": "https://picsum.photos/600/300",
      "content": `
# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"


Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of markdown-it is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :cry: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::
      `
    },
    {
      "id": 2,
      "title": "Lorem",
      "desc": "Commodo minim id ut laborum sit mollit irure proident in duis eiusmod nostrud veniam. Labore minim pariatur eu incididunt ad consequat. Elit laborum est sit dolor aliquip non elit sint aliquip ea ex aliqua. Anim nisi id quis enim. Labore minim ullamco ullamco enim. Excepteur id cupidatat ullamco aliquip commodo in elit proident eu enim culpa cupidatat. Est do cillum qui cillum ut mollit sint veniam.",
      "img": "https://picsum.photos/600/300",
      "content": "# Dolor sit amet $\\pi=3.14$"
    },
    {
      "id": 3,
      "title": "Lorem",
      "desc": "Laboris aute nisi voluptate ea sit non proident magna ea proident. Esse nostrud ad quis incididunt sunt consequat cillum officia nostrud exercitation et nostrud qui mollit. Aute non nostrud adipisicing ipsum anim esse excepteur voluptate commodo laboris laborum mollit qui proident. Elit excepteur non tempor dolor amet. Ut laborum do magna minim eiusmod laborum ullamco.",
      "img": "https://picsum.photos/600/300",
      "content": "# Dolor sit amet $\\pi=3.14$"
    },
    {
      "id": 4,
      "title": "Lorem",
      "desc": "ipsum $\\Omega$",
      "img": "https://picsum.photos/600/300",
      "content": "# Dolor sit amet $\\pi=3.14$"
    },
    {
      "id": 5,
      "title": "Lorem",
      "desc": "Do pariatur commodo sint eu laborum in ex. Sint eiusmod pariatur elit sint ex non enim magna. Ut sint adipisicing culpa fugiat nisi culpa. Nulla tempor velit sunt sint anim culpa officia ex et. Nisi ea ipsum in sint. Amet eiusmod eu nulla sint ullamco proident. Elit officia nulla ipsum mollit officia et Lorem ipsum eu esse est.",
      "img": "https://picsum.photos/600/300",
      "content": "# Dolor sit amet $\\pi=3.14$"
    },
    {
      "id": 6,
      "title": "Lorem",
      "desc": "Dolore nisi consectetur sunt veniam nulla magna aute eu quis voluptate sit fugiat. Do nulla nostrud nulla ipsum quis cillum veniam sint anim non est. Consectetur occaecat anim velit ipsum excepteur cillum culpa in elit.",
      "img": "https://picsum.photos/600/300",
      "content": "# Dolor sit amet $\\pi=3.14$"
    },
    {
      "id": 7,
      "title": "Lorem",
      "desc": "Amet esse ipsum consequat amet sunt sint quis minim anim nostrud. Laboris eiusmod cillum sint qui quis commodo eu non aute incididunt eu eiusmod pariatur commodo. Aliqua tempor commodo commodo cillum esse nostrud consequat deserunt do veniam eu aliqua ad qui. Voluptate eiusmod voluptate pariatur dolor pariatur ad reprehenderit elit aliqua irure magna. Irure elit minim ad esse sunt esse eiusmod.",
      "img": "https://picsum.photos/600/300",
      "content": "# Dolor sit amet $\\pi=3.14$"
    },
    {
      "id": 8,
      "title": "Lorem",
      "desc": "Ut aliqua fugiat cupidatat aute mollit do elit quis quis pariatur. Dolore cillum duis mollit exercitation id labore est anim incididunt commodo. Ipsum amet ullamco Lorem excepteur mollit id deserunt magna incididunt ad exercitation labore. Id ea eiusmod ex nostrud ipsum irure in non.",
      "img": "https://picsum.photos/600/300",
      "content": "# Dolor sit amet $\\pi=3.14$"
    }
  ]
}
