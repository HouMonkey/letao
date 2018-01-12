/**
 * Created by Administrator on 2018/1/11.
 */
$(function () {

  //要求用户名不能为空
  //要求密码不能为空，并且长度是6-12
  //表单校验插件，在表单提交的时候做校验如果校验失败了，会阻止表单的提交。如果校验成功了，它就会让表单继续提交。

  var $form = $("form");
  //初始化表单校验插件
  $form.bootstrapValidator({

    //配置校验时显示的图标
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

    //配置校验规则,name属性
    fields: {
      //配置username的校验规则
      username: {
        //里面可以配置userna所有的校验
        validators: {
          //非空校验
          notEmpty: {
            //提示信息
            message:"用户名不能为空哟！"
          },
          //用于校验失败后，提示的信息
          callback: {
            message:"用户名不存在！"
          }
        }
      },
      //配置password的校验规则
      password: {
        validators: {
          //非空校验
          notEmpty: {
            //提示信息
            message:"用户密码不能为空哟！"
          },
          //长度校验
          stringLength: {
            min:6,
            max:12,
            message:"密码必须是6-12位"
          },
          //用于校验失败后，提示的信息
          callback: {
            message:"密码错误！"
          }
        }
      }
    }
  });
});