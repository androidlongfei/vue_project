# 疑惑

## 为什么vue中data动态增加的属性是非响应式的

```
这是因为动态增加的熟悉没有被Object.defineProperty初始化, 导致该属性没有set和get方法.
从而导致该属性没有被watcher到.结果就无法响应式
```

> `响应式`:数据改变 -> 视图改变

备注:

- Object.defineProperty用法:`./technical.md`
- 响应式原理图:`./responsive.png`

## Vue执行DOM更新是异步的.

Vue观察到数据变化，将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会一次推入到队列中.

因为DOM更新是异步的,如果想在DOM更新之后做某些操作需要用到`Vue.nextTick(callback)`。

例如:

```javascript
data() {
  return {
    message: 'not updated'
  }
},
methods: {
  updateMessage() {
    this.message = 'updated'
    console.log(this.$el.textContent) // => 'not updated'
    this.$nextTick(() => {
      console.log(this.$el.textContent) // => 'updated' =>做某些操作
    })
  }
}
```

## CSS中scoped的作用

scoped属性会自动添加一个唯一的属性（比如 data-v-21e5b78）为组件内CSS 指定作用域，编译的时候 .list-container:hover 会被编译成类似 .list-container[data-v-21e5b78]:hover

```css
<style scoped>
  @media (min-width: 250px) {
    .list-container:hover {
      background: orange;
    }
  }
</style>
```

> `scoped`:的作用是使CSS只在当前组件中起作用
