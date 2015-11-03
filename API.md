## `name`

Convert from [array interval notation](https://github.com/danigb/music.array.notation)
to [shorthand interval notation](https://en.wikipedia.org/wiki/Interval_(music)#Shorthand_notation)

The returned string has the form: `number + quality` where number is the interval number
(positive integer for ascending intervals, negative integer for descending intervals, never 0)
and the quality is one of: 'M', 'm', 'P', 'd', 'A' (major, minor, perfect, dimished, augmented)

### Parameters

* `interval` **`Array`** the interval in array notation


### Examples

```js
interval.name([1, 0, 0]) // => '2M'
interval.name([1, 0, 1]) // => '9M'
```

Returns `String` the interval string in shorthand notation or null if not valid interval


