/*
142  下列说法正确的有：（）
            A    visibility:hidden;所占据的空间位置仍然存在，仅为视觉上的完全透明；
            B    display:none;不为被隐藏的对象保留其物理空间；
            C    visibility:hidden;与display:none;两者没有本质上的区别；
            D    visibility:hidden;产生reflow和repaint（回流与重绘）；
        正确答案: A B
        解释：
            display：none指的是元素完全不陈列出来，不占据空间，涉及到了DOM结构，故产生reflow与repaint
            visibility：hidden指的是元素不可见但存在，保留空间，不影响结构，故只产生repaint
            Reflow 的成本比 Repaint 的成本高得多的多。DOM Tree 里的每个结点都会有 reflow 方法，一个结点的 reflow 很有可能导致子结点，甚至父点以及同级结点的 reflow。 
            当你增加、删除、修改 DOM 结点时，会导致 Reflow 或 Repaint。 
            当你移动 DOM 的位置，或是搞个动画的时候。 
            当你修改 /删除CSS 样式的时候。 
            当你 Resize 窗口的时候（移动端没有这个问题），或是滚动的时候。 
            当你修改网页的默认字体时。 
            当你设置 style 属性的值 （Setting a property of the style attribute）。 
            注：display:none 会触发 reflow，而 visibility:hidden 只会触发 repaint，因为没有发现位置变化。
143  以下说法正确的是
            A    HTML中表示标题的标签应该全部使用h1
            B    应该将 h1 用作主标题（最重要的），其后是 h2（次重要的），再其次是 h3，以此类推。
            C    应该根据页面中内容的层级关系来决定使用合适的标题标签。
            D    h1标签用来描述网页中最上层的标题。
        正确答案: B C
        解释：
            1. 应该根据标题的不同层级使用h1、h2、h3......
            2. 对
            3. 对
            4. 网页最上层的标题应该是title，文章最上层的标题才是h1
144  MVC是一种常见的架构。以下描述错误的是？
            A    只有Web系统才能使用MVC
            B    只有能够保存正在数据库里面的实体才能称之为模型（Model）
            C    只有以HTML形式显示的页面才是视图（View）
            D    模型变更之后，只有控制器（Controller）才能驱动视图变更或重新渲染视图
        正确答案: A B C 
        解释：
            Model（模型）是应用程序中用于处理应用程序数据逻辑的部分。
            通常模型对象负责在数据库中存取数据。
            View（视图）是应用程序中处理数据显示的部分。
            通常视图是依据模型数据创建的。
            Controller（控制器）是应用程序中处理用户交互的部分。
            通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据。
            MVC模型：是一种架构型的模式，本身不引入新功能，只是帮助我们将开发的结构组织的更加合理，使展示与模型分离、流程控制逻辑、业务逻辑调用与展示逻辑分离。 
            首先让我们了解下MVC（Model-View-Controller）三元组的概念： Model（模型）：数据模型，提供要展示的数据，因此包含数据和行为，可以认为是领域模型或
            JavaBean组件（包含数据和行为），不过现在一般都分离开来：Value Object（数据） 和 服务层（行为）。也就是模型提供了模型数据查询和模型数据的状态更新
            等功能，包括数据和业务。 View（视图）：负责进行模型的展示，一般就是我们见到的用户界面，客户想看到的东西。 Controller（控制器）：接收用户请求，委托
            给模型进行处理（状态改变），处理完毕后把返回的模型数据返回给视图，由视图负责展示。 也就是说控制器做了个调度员的工作，。 在标准的MVC中模型能主动推数
            据给视图进行更新（观察者设计模式，在模型上注册视图，当模型更新时自动更新视图），但在Web开发中模型是无法主动推给视图（无法主动更新用户界面），因为在
            Web开发是请求-响应模型。 那接下来我们看一下在Web里MVC是什么样子，我们称其为 Web MVC 来区别标准的MVC。
145  下列关于比较Ajax与Flash的优缺点，相关描述正确的是？
            A    Ajax的优势在意在于开放性，易用性及易于开发
            B    Flash的优势在于多媒体处理，可以更容易的调用浏览器以外的外部资源
            C    Ajax最主要的批评就是它可能破坏浏览器的后退功能
            D    flash 文件经常会很大，用户第一次使用的时候需要忍耐较长的等待时间
        正确答案: A B C D 
        解释：
            1.Ajax的优势：1.可搜索性 2.开放性 3.费用 4.易用性 5.易于开发。
            2.Flash的优势：1.多媒体处理 2.兼容性 3.矢量图形 4.客户端资源调度
            3.Ajax的劣势：1.它可能破坏浏览器的后退功能   2.使用动态页面更新使得用户难于将某个特定的状态保存到收藏夹中 ，不过这些都有相关方法解决。
            4.Flash的劣势：1.二进制格式 2.格式私有 3.flash 文件经常会很大，用户第一次使用的时候需要忍耐较长的等待时间  4.性能问题
146  以下分析以下代码说法正确的是:（ ）
        <html>
        <head>
        　<script type="text/javascript">
        　　function writeIt (value) { document.myfm.first_text.value=value;}
        　</script>
        </head>
        <body bgcolor="#ffffff">
        　<form name="myfm">
        　　<input type="text" name="first_text">
        　　<input type="text" name="second_text" onchange="writeIt(value)">
        　</form>
        </body>
        </html>
            A    在页面的第二个文本框中输入内容后，当光标离开第二个文本框时，第一个文本框的内容不变
            B    在页面的第一个文本框中输入内容后，当光标离开第一个文本框时，将在第二个文本框中复制第一个文本框的内容
            C    在页面的第二个文本框中输入内容后，当光标离开第二个文本框时，将在第一个文本框中复制第二个文本框的内容
            D    在页面的第一个文本框中输入内容后，当光标离开第一个文本框时，第二个文本框的内容不变
        正确答案: C D
        解释：
            onchange 是失去焦点且内容改变才会执行函数~
            onblur 只要失去焦点 就会执行函数~~
147  下面属于CSS3新增属性的有？
            A    box-shadow
            B    text-shadow
            C    border-radius
            D    rgba
        正确答案: A B C D
        解释：
                CSS3新增属性用法整理：
                1、box-shadow（阴影效果）
                2、border-color（为边框设置多种颜色）
                3、border-image（图片边框）
                4、text-shadow（文本阴影）
                5、text-overflow（文本截断）
                6、word-wrap（自动换行）
                7、border-radius（圆角边框）
                8、opacity（透明度）
                9、box-sizing（控制盒模型的组成模式）
                10、resize（元素缩放）
                11、outline（外边框）
                12、background-size（指定背景图片尺寸）
                13、background-origin（指定背景图片从哪里开始显示）
                14、background-clip（指定背景图片从什么位置开始裁剪）
                15、background（为一个元素指定多个背景）
                16、hsl（通过色调、饱和度、亮度来指定颜色颜色值）
                17、hsla（在hsl的基础上增加透明度设置）
                18、rgba（基于rgb设置颜色，a设置透明度）
148  关于web表单登录中用到的图形验证码的实现,以下做法不正确的有:
            A    返回给浏览器的html代码中包含图形验证码和文本字符串,登录前客户端判断输入内容和页面中保存的内容是否一致
            B    服务器端在返回的图片和cookie中同时包含图形验证码,登录前客户端判断输入内容和cookie保存的内容是否一致
            C    服务器端生成验证码后一方面通过图片将验证码返回给客户端,同时在服务器端保存文本的验证码,由服务器端验证输入内容是否正确
            D    浏览器通过识别图形验证码中的内容和用户输入的内容判断是否一致
        正确答案: A B D 
        解释：
                A B选项都把正确的验证码文本放在了客户端，这是违背了验证码的初衷的。爬虫或者是恶意程序依旧可以通过各种手段获取你嵌入在html文本或者保存在cookie中的正确验证码文本，模拟表单提交来达到攻击的目的。
                D选项更是无稽之谈。
                C选项才是正确的实现方式，发送到客户端的只有图片形式的验证码，服务器端保存cookie对应的图形验证码的正确文本。客户端表单提交时到服务器端验证。
149  关于canvas不正确的是？
            A    canvas是HTML5的一部分，允许脚本动态渲染位图像
            B    canvas是作为Flash的替代技术出现
            C    canvas拥有多种绘制路径、矩形、圆形、字符及添加图像的方法
            D    Internet Explorer自Internet Explorer9起已经可以支持canvas
        正确答案: A B
        解释：
            1.canvas的确是绘制位图的，svg是绘制矢量图，矢量图放大了不失真，也就是放大了不模糊，而canvas画的放大了要变成撸多了的模式。之所以错是canvas不能动态渲染，说白了就是不能直接动DOM树，画了不能再通过js去修改，只能从源码修改。 
            2.只有HTML5能干掉flash和silverlight，而不是canvas 
150  下列说法中，错误的是
            A    echo、print、printf可以打印变量内容，但不能显示数组及系统超过级变量数组
            B    print_r不仅可以打印数组、标题变量，还可以打印对象的内容
            C    echo是一个语句，可以使用.（小圆点）来拼接字符串，而print则不可以
            D    echo 语句可以有返回值
        正确答案: C D 
        解释：
            1：echo：是语句不是函数，没有返回值，因此不能作为表达式的一部分使用。可输出多个变量值，不需要圆括号。不能输出数组和对象，只能打印简单类型(如int,string)。 
            2：print：是语句不是函数，有返回值 true/false，只能输出一个变量，不需要圆括号。不能输出数组和对象，只能打印简单类型(如int,string)。 
            3：print_r：是函数，可以打印复合类型，例如：stirng、int、float、array、object等，输出array时会用结构表示，而且可以通过print_r($str,true)来使print_r不输出而返回print_r处理后的值。但print_r输出布尔值和NULL的结果
            没有意义，因为都是打印”\n” 4：var_dump() 判断一个变量的类型和长度，并输出变量的数值。适合调试
151  以下说法正确的是
            A    <kbd>来表示用户输入
            B    <var>用来表示变量
            C    list-inline类会将所有的元素放置于同一行<br>
            D    <code>表示代码片段
        正确答案: A B C D
        
        解释：
            <em>	把文本定义为强调的内容。
            <strong>	把文本定义为语气更强的强调的内容。
            <dfn>	定义一个定义项目。
            <code>	定义计算机代码文本。
            <samp>	定义样本文本。
            <kbd>	定义键盘文本。它表示文本是从键盘上键入的。它经常用在与计算机相关的文档或手册中。
            <var>	定义变量。您可以将此标签与 <pre> 及 <code> 标签配合使用。
            <cite>	定义引用。可使用该标签对参考文献的引用进行定义，比如书籍或杂志的标题。




*/