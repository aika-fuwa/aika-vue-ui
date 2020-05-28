### 代码规范

### 文件
1. 建议: JavaScript 文件使用无 BOM 的 UTF-8 编码  
2. 建议: 在文件结尾，保留一个空行  

### 结构
1. 强制: 必须缩进4个空格  
   注: 注意是四个空格，而不是两个tab  
2. 强制: 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格  
   例: var a = !arr.length;  
       a++;
3. 强制: 用作代码块起始的左花括号 { 前必须有一个空格  
   例: if (condition) {}  
   强制: if / else / for / while / function / switch / do / try / catch / finally 关键字后，必须有一个空格  
4. 强制: 对象属性: 前不允许有空格，后面必须有空格  
4. 强制: ,和;前不允许有空格，如果不是在行尾巴， ,和;后必须跟空格  
5. 强制: 在函数调用、函数声明、括号表达式、属性访问、if / for / while / switch / catch 等语句中，() 和 [] 内紧贴括号部分不允许有空格  
6. 强制: 单行声明的数组与对象，如果包含元素，{} 和 [] 内紧贴括号部分不允许包含空格  
7. 强制: 每个独立语句结束后必须换行  
8. 强制: 每行不得超过 120 个字符，超过120字符，合理进行换行缩紧  
9. 强制: 运算符处换行时，运算符必须在新行的行首  
10. 强制: 在函数声明、函数表达式、函数调用、对象创建、数组创建、for 语句等场景中，不允许在 , 或 ; 前换行  
11. 建议: 不同行为或逻辑的语句集，使用空行隔开，更易阅读  
12. 强制: 不准使用单行if语句，必须加上{}换行写  
13. 强制: 使用驼峰命名法，命名对时候做好取有意义的名称，而不是使用如a, b这些看不懂的变量  
14. 强制: 类名必须大写  
15. 强制: 枚举类型里的变量必须全部大写！  
16. 强制: 添加方法、声明文件、单独的js文件，必须在顶部加上注释写上该内容的意义   
     例: /**  
        * @file describe the file about  
        * doSomething  
        */  
        /**  
        * @params param1, param2, ....  
        */  
17. 强制: 命名空间使用@namespace 标识  
     例: /**  
        * @namespace  
        */  
18. 建议: 类注释
     例:  使用 @class 标记类或构造函数
     注: 对于使用对象 constructor 属性来定义的构造函数，可以使用 @constructor 来标记
19. 建议: 使用 @extends 标记类的继承信息  
     例: /**  
        * some describe information  
        * @class  
        * @extends Developer  
        */  
        function Fronteer() {  
            Developer.call(this);  
        }  
        util.inherits(Fronteer, Developer);  
20. 强制: 类的属性或方法等成员信息不是 public 的，应使用 @protected 或 @private 标识可访问性  
21. 强制: 返回类型必须在方法或文件顶部进行注释，类型定义必须{开始,}结束  
     例: {string}, {number}, {boolean}, {Object}, {Function}, {RegExp}, {Array}, {Date}  
22. 强制: 对于基本类型 {string}, {number}, {boolean}，首字母必须小写  
     例: /**  
        * function describe information  
        * @param {string} p1 参数1的说明  
        * @param {string} p2 参数2的说明，比较长  
        *     换行  
        * @param {number=} p3 参数3的说明（可选）  
        * @return {Object} 返回值描述  
        */  
        function foo(p1, p2, p3) {  
            var p3 = p3 || 10;  
            return {  
              p1: p1,  
              p2: p2,  
              p3: p3  
            };  
        }  
23. 强制: 对 Object 中各项的描述， 必须使用 @param 标识  
24. 强制: 必须使用 @event 标识事件，事件参数的标识与方法描述的参数标识相同  
     例: /**  
        * 值变更时触发  
        *  
        * @event Select#change  
        * @param {Object} e e描述  
        * @param {string} e.before before描述  
        * @param {string} e.after after描述  
        */  
25. 建议: 尽可能使用 === 进行条件判断，只有null/undefined时才可以使用 ==，但是TS中一般不存在这种情况  
26. 尽可能使用简洁表达式  
     例: if (param) {}  
27. 强制: 字符串必须使用单引号 ''  
28. 强制: 必须使用字面量来创建数组或对象  
29. 强制: 接口命名不要使用I开头
30. 强制: 不应显式声明可以自动类型推断的类型
31. 强制: 使用string/number/boolean来声明基础类型,不要使用String/Number/Boolean
32. 建议: 数组元素为不可变类型时，使用ReadonlyArray<T>声明类型
33. 强制: 不实用！声明对象属性非空  
     例: if (foo.bar && foo.bar.baz) {}  
     反例: if (foo!.bar!.baz) {}  
34. 建议: 不建议使用any类型
35. 强制: 断言使用as，而不是使用<>
36. 强制: 接口不应为空
37. 强制: 接口中同一函数重载的类型声明需相邻
38. 强制: 禁止return undefined，应当使用return
39. 建议: 每个文件声明一个类
40. 强制: 类成员为pubic，不要显示声明
41. 建议: 构造函数可以忽略时，应当尽量忽略
42. 强制: 类成员之间使用空行隔开
43. 建议: 构造函数初始化实例属性时，应尽量使用参数属性
44. 建议: 构造函数的参数中，作为属性的参数应排列于其他参数前
45. 使用ES6（ES2015）来进行模块化开发
46. 强制: 对于同一个模块路径，仅 import 一次
47. 强制: vue开发模块书写: template -> script -> style
48. 强制: template中不要使用key属性
49. 强制: 如果自定义标签中没有内容，需要以自闭合标签形式出现
50. 建议: 自闭合标签的 /> 前不用添加空格
51. 强制: 模板中的属性必须使用双引号“”
52. 强制: 属性有大小写的时候，必须分开
     例: greetText ===> greet-text
53. 建议: bool值为true时，不要显示添加true
54. 强制: 属性超过2个时, 必须换行
55. 强制: v-for必须添加key
56. 强制: v-if和v-for不许出现在一个元素
57. 强制: v-bind用 : 代替， v-on使用@代替
58. 强制: 模板插值两边添加空格
     例: {{ text }}
59. 强制: props的时候必须声明其类型和指定默认值
60. 建议: $emit时一旦参数超过两个，用对象代替
















