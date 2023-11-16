import React from 'react'

const UserInfo = () => {
  return (
    <div className='container'>
        <div className="border-top">
            <h2 className="text-start ps-4 pt-3 m-4">내 정보</h2>
            <div className="border-top mx-5">
                <div className="m-3 mx-auto border shadow-md rounded">
                    <div className="text-start">
                        <label className='col-2'>이름 : </label>
                        <input type="text" name="username" readOnly className='col-10 form-control'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserInfo