---
title: Input 输入框

---

## Input 输入框

<demo-base></demo-base>

::: details 点击查看代码
```vue
<div class="row">
    <h4>事件</h4>
    <aika-input v-model="value"
                @input="handleInput"
                @change="handleChange"
                clearable>
    </aika-input>
</div>
<div class="row">
    <h4>禁用</h4>
    <aika-input v-model="value"
                disabled>
    </aika-input>
</div>
<div class="row">
    <h4>文本框</h4>
    <aika-input v-model="value"
                type="textarea"
                :rows="5">
    </aika-input>
</div>
```
:::


<script>
import demoBase from '../component-demo/input';

export default {
    components: {
        demoBase
    }
}

</script>
