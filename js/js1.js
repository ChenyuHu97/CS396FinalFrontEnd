// const cors = require("cors")
// app.use(cors())

let isLogin = false;



async function login(){
	let Myusername = document.getElementById("Username").value;
	let Mypassword = document.getElementById("Password").value;
	let MyUrl = "http://localhost:8083/login?username="+Myusername+"&password="+Mypassword;
	fetch(MyUrl, { 
    method: 'POST'
  })
  .then((res)=>{
    return res.text()
  })
  .then((res)=>{
    console.log(res);
	let jsonObject= JSON.parse(res);
	if(jsonObject.message =="SUCCESS"){
	location.href="management.html";
	}else{
		Swal.fire({
			icon: 'error',
			title: 'Failed',
			text: 'Incorrect username or password'
		}
		  )
	}
  })

}

async function signUp(){
	let userName = document.getElementById("Username").value;
	let firstPassword =  document.getElementById("firstPassword").value;
	let secondPassword = document.getElementById("secondPassword").value;
	console.log(firstPassword);
	console.log(secondPassword);

	if(firstPassword.length <8 || secondPassword.length <8){
		Swal.fire({
			icon: 'error',
			title: 'Failed',
			text: 'Password cannot be shorter than 8'
		}
		  )
	}

	else if(firstPassword != secondPassword){
		Swal.fire({
			icon: 'error',
			title: 'Failed',
			text: 'two password are not same'
		}
		  )
	}else{
		let MyUrl = "http://localhost:8083/register?username="+userName+"&password="+firstPassword;
		fetch(MyUrl, {
			method: 'POST'
		  })
		  .then((res)=>{
			return res.text()
		  }).then((result)=>{
			  console.log(result);
			  let jsonObject= JSON.parse(result);
			  if(jsonObject.message == "User existed"){
				Swal.fire({
					icon: 'error',
					title: 'Failed',
					text: 'User already Exist,change a user name'
				}
				)
			  }else if(jsonObject.message == "SUCCESS"){
				Swal.fire(
					'Good job!',
					'Create User successfully',
					'success'
				  )
			  }
		  })
	}
}






