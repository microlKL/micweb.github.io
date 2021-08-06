$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "请根据提示，将资料填写完整");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#msg_subject").val();
    var message = $("#message").val();

    // $.ajax({
    //     type: "POST",
    //     url: "php/form-process.php",
    //     data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
    //     success : function(text){
    //         if (text == "success"){
    //             formSuccess();
    //         } else {
    //             formError();
    //             submitMSG(false,text);
    //         }
    //     }
    // });

    // alert(name)
    // alert(email)
    // alert(msg_subject)
    // alert(message)

    if(!name || !email || !msg_subject || !message){
        formError();
        submitMSG(false,'请根据提示，将资料填写完整',null);
    }else{
        var formData = {
            name: name,
            email: email,
            msg_subject: msg_subject,
            message: message
        }
        formSuccess(formData);
    }
}

function formSuccess(formData){
    // 清空表单
    // $("#contactForm")[0].reset();
    submitMSG(true, "万分感谢您的推荐和分享!",formData);
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg,formData){
    if(valid){
        // var msgClasses = "h3 text-center tada animated text-success";
        var mailContent = "提供者名称：" + formData.name + ";\n"
        mailContent = mailContent + "提供者邮箱：" + formData.email + ";\n"
        mailContent = mailContent + "提供者推荐内容：" + formData.message + ";\n"
        callApiSendEmail(formData,formData.msg_subject,mailContent,msg)
    } else {
        var msgClasses = "h3 text-center text-danger";
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    // $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

// ajax 访问后台接口，发送邮件
function callApiSendEmail(formData,subject,content,successHint){
    // var rootPath = 'https://www.micking.top:7272'
    var data = {
        subject: subject,
        content: content,
        userEMail: formData.email
    }
    $.axpost(apiRootPath+"/homeweb/email/send", data, function(response){
        // console.log(response)
        // console.log(response.errno)
        if (response) {
            if(String(response.errno) === '0'){
                var msgClasses = "h3 text-center tada animated text-success";
                $("#msgSubmit").removeClass().addClass(msgClasses).text(successHint);
            }else if(String(response.errno) === '663') {
                // alert(response.errmsg)
                var msgClasses = "h3 text-center text-danger";
                $("#msgSubmit").removeClass().addClass(msgClasses).text(response.errmsg);
            }
        }else{
            // alert('万分抱歉，邮件发送失败，我们会及时修复！')
            var msgClasses = "h3 text-center text-danger";
            $("#msgSubmit").removeClass().addClass(msgClasses).text('万分抱歉，邮件发送失败，我们会及时修复！');
        }
    });
}