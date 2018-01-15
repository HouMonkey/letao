/**
 * Created by Administrator on 2018/1/13.
 */
$(function () {

  var page = 1;//记录页码
  var pageSize = 5;//每页的页数

  //1.发送ajax请求，获取到用户的数据
  //2.通过模板引擎把数据渲染出来
  render();

  function render() {
    $.ajax({
      type: 'get',
      url: '/user/queryUser',
      data: {
        page: page,
        pageSize: pageSize
      },
      success: function (info) {
        //3.模板第三步：准备渲染的数据,info就是需要渲染的数据
        console.log(info);
        //模板第四步：让数据和模板进行绑定 template 模板 + 数据 = html的结果
        //第一个参数：模板的id
        //第二个参数：对象
        //当模板与对象进行绑定之后，模板里面可以直接使用对象所有的属性。
        //返回：html结果的字符串
        var result = template('tpl' , info);

        //模板第五步：渲染到页面
        $('tbody').html(result);

        //渲染分页
        //如果引入的bootstrap的版本是3+
        //1.分页的盒子必须是ul元素
        //2.还需要指定一个属性：bootstrapMajorVersion指定bootstrap的版本
        $('#paginator').bootstrapPaginator({
          bootstrapMajorVersion: 3,//设置bootstrap的版本
          currentPage: page,//设置当前页
          totalPages: Math.ceil(info.total / info.size),//设置总页数，根据返回结果的总条数/每页的页数
          numberOfPages: 5,//空间上显示的条数
          onPageClicked: function (a , b , c , p) {
            //通过page能够过去到点击页面
            //console.log(page);

            //让当前页码变成p
            page = p;
            //重新渲染即可
            render();
          }
        });
      }
    });

  }




})