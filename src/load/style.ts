import {isMobile} from '../scripts/animateResume/untils/untils'

const is_mobile: boolean = isMobile()

export const style1:string = `/**
 *
 * 你们好，我的名字叫 Lucas（侯策），职业是程序猿
 *
 * 这里我直播写代码，教大家怎么美化一个圣诞祝福页面
 *
 * 让我们开始吧...
 * 真的开始啦～
 */

* {
  transition: all 1s;
}

/**
 * 看上去什么也没有啊，不要着急，你等下
 *
 * 白底黑字写代码看上去有点烦，
 * 我们还是先改一下字和背景吧
 */

html {
  background: #216583;
  font-size: 10px;
  overflow: hidden;
}

/***
 * 稍等片刻...
 */

pre, a {
  color: #ffffff;
}

/**
 * 这样好一些
 *
 * 干写代码什么也看不出来
 *
 * 我开辟一个空间，上半部分展示写代码，下半部分用来展示代码效果
 */

pre:not(:empty) {
  ${is_mobile ?
  `height:46%;
  width: calc(100% - 2rem);`
  :
  `height: 100%;`}
  font-size: 1.4rem;
  overflow: auto;
  background: rgb(48, 48, 48);
  border: 1px solid #ccc;
  padding: 1rem 1rem 2rem;
  white-space: pre-wrap;
  outline: 0;
}

#style-container {
  height:92%;${is_mobile ? 'width:100%;' : 'width: 49%;transform: translateX(95%);'}
  position: absolute;
  left: 1rem;
  top: 1rem;
}

/**
 * 这样不错，但是代码都是白色，看上去晕晕的
 * 我让代码可读性更高一些
 */

#style-container  { color: #DEDEDE }
.comment       { color: #857F6B; font-style: italic; }
.selector      { color: #D7BA7D; }
.keyword       { color: #569CD6; }
.property      { color: #569CD6; }
.function      { color: #C366A3; }
.punctuation   { color: #FFCF00; }

/**
 * 再加一点立体效果
 */

body {
  perspective: 100rem;
}

#style-container {
  ${is_mobile ? 'transform: rotateX(-10deg);' : 'transform: translateX(98.5%) rotateY(-10deg);'}
  transform-origin: right;
}

/**
 * 不错不错
 * 接下来导入圣诞祝福页面吧
 */

 #resume-container {
  height:92%;${is_mobile?'width:100%;':'width: 49%;'}
  white-space: normal;
 ${is_mobile ? 
  ` position: absolute;
  left: 1rem;
  top:50%;`
  : `position: absolute;
  left: 1rem;
  top: 1rem;
  transform: rotateY(10deg);
  transform-origin: left;`}
}
`

export const style2 = `/**
 * 美化一下页面内容
 */

#resume-container{
  font-size: 1.4rem;
}
#resume-container h1{
  display: inline-block;
  border-bottom: 1px solid;
  margin: .5rem 0 1rem;
  font-size: 2.6rem;
}
#resume-container a{
  color: #ffffff;
  text-decoration: none;
}
#resume-container ul> li{
  margin-bottom: .3rem;
}
#resume-container ul> li::before{
  content: '•';
  margin-right: .5rem;
  color: '#ffffff';
}

/**
 * 这基本上就做完了
 *
 * 搞了这些什么意思呢
 *
 * 就是想让大家看看代码怎么生成世间万物
 *
 * 最后再次祝所有人🎄圣诞快乐🎄，尤其是女朋友——高榕阳！
 *
 * 最后再次祝所有人🎄圣诞快乐🎄，尤其是女朋友——高榕阳！
 *
 * 最后再次祝所有人🎄圣诞快乐🎄，尤其是女朋友——高榕阳！
 */`
