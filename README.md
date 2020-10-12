# vue-touch-scroll
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nguyenthanh1995/vue-i18n-filters/blob/master/LICENSE)  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

**A plugin scroll cross browser for Vue.js**


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

``` bash
npm install vue-touch-scroll
```

or if you prefer CDN

``` html
<script type="text/javascript" src="https://unpkg.com/vue-touch-scroll@latest/dist/vue-touch-scroll.js"></script>
```

## Usage

### Global

``` JavaScript
import { use } from "vue"
import VueTouchScroll from "vue-touch-scroll"

use(VueTouchScroll)

```

``` vue.js
<vue-touch-scroll type="vertical">
   <!-- Content -->
</vue-touch-scroll>
```

or

``` vue.js
<div v-touch-scroll:vertical>
   <!-- Content -+>
</div>
```

### Private

``` vue.js
<vue-touch-scroll type="vertical">
   <!-- Content -->
</vue-touch-scroll>

<script>
   import { VueTouchScroll } from "vue-touch-scroll"
   
   export default {
      components: { VueTouchScroll }
   }
</script>
```

or

``` vue.js
<div v-touch-scroll:vertical>
   <!-- Content -+>
</div>

<script>
   import { directive } from "vue-touch-scroll"
   
   export default {
      directives: {
         "touch-scroll": directive
      }
   }
</script> 
```


### Configuration

#### Component

| Property | Type | Default | Description |
|:-|:-|:-|:-|
| tag | String | "div" | A tag name for component |
| type | String | "vertical" | Direction scroll "vertical" or "horizontal" |
| hide-scrollbar | Boolean | false | Are you hide scrollbar? |
| class-scrollbar | String, Array, Object | "" | Class for scrollbar |
| style-scrollbar | Object | {} | Style for scrollbar |

#### Directive

```vue.js
<div v-touch-scroll:arg="value"></div>
```

| Property | Description |
|:-|:-|:-|:-|
| arg | = option type in component |
| value | = option scrollbar |

#### Options sscrollbar

``` vue.js
<div v-touch-scroll:vertical="{
   render: true, // render scrollbar?
   class: [] // class for scrollbar,
   style: {}
}"></div> 
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
