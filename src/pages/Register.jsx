import React,{useState} from 'react'
import {useDaumPostcodePopup} from 'react-daum-postcode';

const Register = () => {
  const CURRENT_URL = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(CURRENT_URL);
  
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [cperr, setCperr] =useState('');
  const [email, setEmail] = useState('');
  const [zoneCode, setZoneCode] = useState('');
  const [regionAddress, setRegionAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  const handleId =(e)=>{
    setId(e.target.value)
  }
  const handleName =(e)=>{
    setName(e.target.value)
  }
  const handlePass =(e)=>{
    setPassword(e.target.value)
  }
  const handleConfirm =(e)=>{
    setConfirmPass(e.target.value);
    if(e.target.value !== password){
      setCperr('비밀번호 불일치');
    }else{
      setCperr('');
    }
  }
  const handleEmail =(e)=>{
    setEmail(e.target.value)
  }
  const handleZone = (e)=>{
    setZoneCode(e.target.value)
  }
  const handleRegion =(e)=>{
    setRegionAddress(e.target.value)
  }
  const onDetailAddress = (e)=>{
    setDetailAddress(e.currentTarget.value) 
  }

  const onClickHandler = ()=>{
    open({onComplete:handleComplete});
  }
  const handleComplete =(data)=>{
    let fullAddress = data.address;
		let extraAddress = '';
    let zoneCodes = data.zonecode;
    setZoneCode(data.zonecode)
    setRegionAddress(data.address)

		if (data.addressType === 'R') {
			if (data.bname !== '') {
				extraAddress += data.bname;
			}
			if (data.buildingName !== '') {
				extraAddress +=
					extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
			}
			fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
		}
    console.log(zoneCodes);
    console.log(fullAddress);
  };

  const onSubmit =(e)=>{
    e.preventDefault();
    const userInfo ={
      id,
      name,
      password,
      email,
      zoneCode,
      regionAddress,
      detailAddress
    }
    let hasEmpty= false;
    for(let i in userInfo){
      if(!userInfo[i]){
        hasEmpty=true;
      }
    }
    if(hasEmpty){
      alert('모든 항목을 입력해주세요.');
    }else{
      createUserFetch(userInfo).then((data)=>{
        if(data.success){
          alert('회원가입 완료');
          window.location.href='/';
        }else{
          alert(data.msg);
        }
      });
    }
    
  }
  async function createUserFetch(userInfo){
    const reqOption ={
      method:'post',
      header:{
        'content-type':'application/json'
      },
      body:JSON.stringify(userInfo)
    }
    const res = await fetch(
      'http://localhost:3000/register',
      reqOption
    );
    const data = await res.json();
    return data
    
  }
  return (
    <form action="register">
      <div className="container">
        <hr />
        
        <div className="regibox border shadow-lg rounded mx-auto mb-3 px-5" style={{width:'70%'}}>
          <h2 className="text-center mt-5">회원가입</h2>
          <div className='p-5'>
            <div className='my-4'>
              <label htmlFor="name" className='mb-2'>이름 <span className="text-danger">*</span></label>
              <input type="text" name="username" id="username" className="form-control w-50" value={name} onChange={handleName} placeholder='이름'/>
            </div>
            <div className='my-4'>
              <label htmlFor="id" className='mb-2'>아이디 <span className="text-danger">*</span></label>
              <div className="input-group w-50">
                <input type="text" name="userid" id="userid" className="form-control" value={id} onChange={handleId} placeholder='아이디'/>
                <button type="button" className='btn btn-secondary'>아이디 중복확인</button>
              </div>
              
            </div>
            <div className='my-4'>
              <label htmlFor="password" className='mb-2'>비밀번호 <span className="text-danger">*</span></label>
              <input type="password" name="userpass" id="userpass" className="form-control" value={password} onChange={handlePass} placeholder='비밀번호'/>
            </div>
            <div className='my-4'>
              <label htmlFor="passwordchk" className='mb-2'>비밀번호 확인</label>
              <input type="password" name="passchk" id="passchk" className="form-control" value={confirmPass} onChange={handleConfirm} placeholder='비밀번호 확인'/>
              {
                cperr !== '' ? (<div className='text-danger'>{cperr}</div>):null  
              }
            </div>
            <div className='my-4'>
              <label htmlFor="email" className='mb-2'>이메일 <span className="text-danger">*</span></label>
              <div className="input-group">
                <input type="text" name="email" id="email" className="form-control" value={email} onChange={handleEmail} placeholder='이메일'/> @
                <select className="form-select">
                  <option selected>선택하세요.</option>
                  <option value="1">naver.com</option>
                  <option value="2">nate.com</option>
                  <option value="3">gmail.com</option>
                  <option value="4">hanmail.net</option>
                </select>
              </div>
            </div>
            <div className="my-4">
              <label htmlFor="address" className="mb-2">주소 <span className="text-danger">*</span></label>
              <div className="mb-2 input-group w-50">
                <input type="text" className="form-control" id='paddress' placeholder='우편번호' value={zoneCode} onChange={handleZone}/>
                <div className='input-group-append'><button type="button" className="btn btn-secondary" onClick={onClickHandler}>주소찾기</button></div>
              </div>
              <input type="text" id='address' className="mb-1 form-control" placeholder='주소' value={regionAddress} onChange={handleRegion}/>
              <input type="text" id='daddress' className="form-control"  placeholder='세부주소' value={detailAddress} onChange={onDetailAddress}/>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-lg btn-secondary mt-5 mb-4" onClick={onSubmit}>회원가입</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Register