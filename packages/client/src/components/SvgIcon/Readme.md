The SvgIcon component takes an SVG path element as its child and converts
it to a React component that displays the path, and allows the icon to be
styled and respond to mouse events.

```jsx static
import { SvgIcon } from '@bimdata/bricks';

<SvgIcon>
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
</SvgIcon>
```

```
<div>
  <SvgIcon>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
  <SvgIcon color="secondary">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
  <SvgIcon color="primary">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
  <SvgIcon color="success">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
  <SvgIcon color="error">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
  <SvgIcon color="disabled">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
  <div style={{ background: '#222', display: 'inline-block' }}>
    <SvgIcon color="light">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  </div>
</div>
```
