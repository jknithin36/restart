auto close tags - off in settings -- for practice

HTML a = ""
CSS a:; - no need write the values in ""
HTML

// Lecture 11

1. Text Elements
2. only one h1 should be there for clean code in the program - not mandatory
3. Bold - Strong or <b></b>
4. Italic - em(emphasize) or <i></i>

// Lecture 12

1. list elements - ol and ul
2. why we should elements tags - 10:45

// Lecture 13

1. image tag and its attributes such as src alt
2. some inline css such as height and width
3. html lang and meta(UTF-8) attributes

// Lecture 14

1. HyperLinks (a tag) and its attributes such as href and target="\_blank"(to open link in new tab) and empty href

// Lecture 15

1. HTML5 Elements (some container elements)
   for links - eg: nav
   header - top part
   article - main body part
   aside - for secondary information
   footer - for last part
2. Html Entities such as &copy; etc

//Lecture 16

1. schemantic Html - meaning of the element why we are using this particular elements
2. for accessibity

// Lecture 22

CSS

1. inline,internal,External CSS
2. always use external css for
3. link element(href,rel)

// Lecture 23

1. font : family, size, style
2. text-transform
3. line-height
4. text-align

// Lecture 24

1. selecting multiple elements in css
2. selecting desending elements - child of parents

// Lecture 25

1. id
2. class
3. font-weight
4. list-style

// Lecture 26

1. RGB MODEL COLORS
2. Defining colors in css -rgb/ rgba notation (a (alpha) transparecy) - hexa decimal notation (#000000 ,#ffffff)
3. color property (color:xxx;)
4. (background-color: #xxxxx;)
5. bordershorthand property (border:size style color;)
6. border-top, bottom, left, right properties

// Lecture 27

1. psuedo classes - selecting html elements through parents
   eg: li:frist-child , li:nth-chlid(value) ... etc
2. in psuedo classes frist child means frist element of the parent

// lecture 28

1. HYPERLINKS - :link,:visited,:active,:Hover and its uses

// Lecture 30

1. conflicting selectors - all of them apply but if styles conflicting high priority will be - id,class,element selector(p,div, li...), universal selector(\*)

2. psuedo selector has the high priority than elemnts

// Lecture 31

1. inheritance - easily overridden
2. there is a difference between inheritance and conflicting
3. universal selector - selects all elements

// Lecture 33

CSS BOX MODEL

1. content - text , images ... etc
2. border - a line around the elemnt
3. padding - invisible space inside the elemnt
4. margin - space outside the element
5. fill area - area that gets filled with background color and background image

// Lecture 34

1. padding
2. margins
3. collapsing margins -when two margins occupy same place then higher one will occupy place

// Lecture 35

1. height and width

// lecture 38

1. block level and inline boxes
2. display css property
3. for inline elemnts top and bottam boxmodel doesnot apply
4. block, inline, inline-block

// lecture 39

1. relative and absolute positioning
2. for absolute positioning there should be on relative container
3. use top bottom right left for positioning

// lecture 40

1. PSUEDO ELEMENTS(::XXXX) - not exist in html but still we can style
2. adjacent silbling elemnt (elemnt + element ::XXXXX)
3. after and after , content properties

// Lecture 45

1. what is layout - arrange or placements of elements
2. page layouts and component layouts
3. Float layouts , Flex Box , Grid

// lecture 46

1. Float Layout : means remove elemnts from normal flow - float:right,left..

// SKIPPPED FLOAT CONCEPTS

// lecture 51

1. FlexBox used to replace floats
2. display:flex -- display all elemnts side by side
3. align-items:center,flex-end,strech......
4. justify-content: space-between........

// lecture 52

1. Flexbox terminology: Flex-container, Flex-items, main axis & cross axis
2. Flex Container: Gap, justify-content, align-items,flex-direction,flex-wrap,align-content
3. Flex Items: align-self, flex-grow, flex-shrink.....

// Lecture 53

1. align-self : used to arrange individual elemnts in the flexbox
2. order : used to position the elemnts
3. gap : gap creates spaces in flexbox

// Lecture 54

1. Flex Basis - flex-basis : same as width, flex-shrink : it is used to set same to size , flex-grow: it is used to fit the elements
2. Default: flex-basis:auto, flex-shrink:1, flex-groe:0;

3. short and

// Lecture 58

CSS GRID

1. grid
2. grid-template-columns, grid-template-rows
3. column-gap, row-gap

// Lecture 59

1. Grid: used to build 2-diamensional layouts

// Lecture 60

1. fr instead of px
2. auto - which will take only required place
3. repeat(no.of columns, value) - shorthand property

// lecture 61

1. grid column and grid row placings

// lecture 62

1. Aligning grid-items

---

---

---

---

---**\*\***-----

// Lecture 70

// Web design

1. typography
2. colors
3. images and illustrations
4. icons
5. shadows
6. Border-radius
7. white-spaces
8. visual Hieracy
9. user Experience
10. Component and Layout

**_ TIP _**

website personalities:

1. Serious/ Elegant(luxury) -- real estate, fashion(cost), jewelery, luxury products and services
2. minimalist/simple
3. plain/ Neutral (structular layout)
4. Bold / confident (big and bold typography)
5. calm / Peaceful (for products and services)
6. startup / upbeat
7. playful and fun

---**\*\***-----

**_ TYPOGRAPHY _**

1.  use only good and popular typefaces
2.  one or two(rare case) type face per page

    <!-- 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98 -->

3.  For Normal text: 16px to 32px
4.  For Long texts(Blogs) try 20px or bigger
5.  For headlines : 50px+ and bold (600+)
    depending upon personality
6.  DONT USE Font Weight under regular 400
7.  less than 75 characters per line
8.  For normal-sized text, use a line height between 1.5 and 2. For big text, go below 1.5
<!-- 2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 -->

9.  Decrease letter spacing in headlines, if it looks unnatural (this will come from experience)
10. Caps - short titles (short and bold & increase letter spacing)
11. Usally dont justift text
12. no long text boxes (try to create small blocks)

**_ TIP _**

font-size : 16 to 32(normal) and 20+ (Blogs) 50+ (Headlines)
font-weight : 600+ (Headings) and above 400 (normal
)
line-height : 1.5 to 2 (normal) and below 1.5(Headings) 8. part 1 :
letter-spacing : should be less for headlines

---**\*\***-----

**_ COLOR_**

1. red : attention,power,passion,excitement
2. orange : less aggressive, happiness, cheerfulness, creativity
3. yellow : Joy, brightness, intelligence
4. green : nature, health, growth and harmony
5. Blue: peace, trustworthy, professsionalism
6. purple: wealth, wisdom, magic
7. pink : romance, care and affection
8. brown : nature, durability and comfort
9. black : power, elegance, minimalism, grief and sorrow

**_TIPS_**

1. use a good color tone (make sure main color should matches website personality)

2. we need use two types of volor pallete:

a main color - use to draw attention most important elements on the page

a grey color

3. with more experience we can add accent colors

4. For diversity, create lighter and darker “versions” (tints and shades)

5. Text should usually not be completely black. Lighten if up it looks heavy and uninviting

6. always use contrast checker on colors

7. On Darker backgrounds try lighter tints

---**\*\***-----

**_IMAGES_**

TYPES OF IMAGES

1. product photos
2. Story telling photos
3. illustrations
4. patterns 2d and 3d

**_TIP_**

1. use relevant iamges
2. try to show real people to users emotions
3. Crop images (if necessary)
4. Darker or brighten image (using gradient)
5. use same size images when you are placing then side by side
   **_ compress images for better performance _**

---**\*\***-----

**_ICONS_**

1. use a good icon pack
2. use svg icons or icon fonts
3. color svg icons usning stroke and fill properties
4. use relevant images
5. dont create large icons

**_TIP_**
try to enclose them in shapes

---**\*\***-----

**_SHADOWS_**

1. less border-radius : simple
2. more-border-radius: playful
3. use border-radius on buttons, images, around icons, standout sections and other elements
   ....etc

**_TIP_**

Try different colors for shadows

---**\*\***-----

**_ Border-radius_**

1.  Use border-radius to increase the playfulness and fun of the design, to
    make it less serious
2.  Typefaces have a certain roundness: make sure that border-radius matches that roundness!
3.  Use border-radius on buttons, images, around icons, standout sections and other elements

---**\*\***-----

**_WHITESPACE_**

1.  use tons of white spaces between sections, elements
2.  use white spaces instead of lines
    start with lot of white space , then adjust

**_TIP_**

1. Use white spaces to enhance user experience
2. start with lot of white space , then adjust

---**\*\***-----

**_VISUAL HIERARCHY_**

1. we use combination of
   position,
   size,
   colors,
   spacing,
   borders and shadows
   to esthablish a meaningful visual hierarchy
   (is about defining a path for users to guide then through the page in other words draw attention to the most important elements)between elements / components.

**_TIP_**

1. position important elements closer to the top of page(where they get more attention)

2. use images mindfully, as they draw a lot of attention(larger images get more attention)

3. use white spaces stargetically

4. for text elements, use font size, font weight, color and white spaces to convey importance

5. emphasize elements like titles, sub-titles,links,buttons,datapoints, icons

6. de-emphaisze elements like labels or secondary information

7. emphasoze an important component using background color, shadow or border

**_UI AND UX _**

UI:
Visual presentation of a product(how it looks)

eg: layouts, Personality, Typography,colors,icons etc...

UX:

Experience that user has while interacting with the product(functional)

eg:

1. does the app feel logical and well thought
2. are users reaching the goal

**_ QUESTIONS_**

1. what personality(Vibe) website do you want?
   **_TIP_**
   Apply typography , color, images,icons, shadows, border-radius, layout according to them

**_TIP_**

1. How to create website ?

Elements ---> Components ----> layouts ----> Webpage
