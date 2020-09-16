To generate colors.json:

```
theme-analyzer sass/global/_colors.scss | jq '.resolvedCustomProperties' | jq 'to_entries | map_values(.value + { class: "system" })'
```

To generate categories.json:

```
theme-analyzer sass/global/categories/*.scss | jq '.resolvedCustomProperties' | jq 'to_entries | map_values(.value + { class: "category" })' | pbcopy
```

To generate components.json:

```
theme-analyzer components/*/src/**/_theme.scss | jq '.resolvedCustomProperties' | jq 'to_entries | map_values(.value + { class: "component" })' | pbcopy
```
