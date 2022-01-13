import React from 'react'

function Login() {
  return (
    <form >
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name enter</label>
        <input name="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input name="password" type="password" class="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  )
}

export default Login
