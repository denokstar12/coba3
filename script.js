function login(){
  let pass = document.getElementById('password').value;
  if(pass === "1234"){
    document.getElementById('loginScreen').style.display='none';
    document.getElementById('mainContent').style.display='block';
  } else {
    alert('Password salah');
  }
}

function logout(){
  alert('Logout berhasil');
  location.reload();
}

function showPopup(id){
  document.getElementById(id).style.display='block';
}

function closeModal(id){
  document.getElementById(id).style.display='none';
}
