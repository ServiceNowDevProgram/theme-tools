Expects a number that will multiply some other value like size, weight, etc. Usually `1` will be the default value and result in the value staying the same. A number like `1.25` will result in a larger value that is 125% of the default. A number like `0.8` will result in a smaller value that is 80% of the default. Some properties only support a scale value in a specific range, e.g. only from `0.9 - 1.1`.

- Format: `<integer|decimal>`
- Also accepts a reference to another style hook with the same schema
- Example: `0.5` for 50% of default, `1.5%` for 150% of default
