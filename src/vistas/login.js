export const login = {
    template: `<form>
    <div class="row">
      <div class="col">
      <input type="email" class="form-control" id="email" placeholder="Email" required>
      </div>
      <div class="col">
      <input type="password" class="form-control" id="pass" required maxlength="16" placeholder="Password"  minlength="6" pattern="[A-Z]{1,}[^A-Z]{1,}[0-9]{1,}">
      </div>
      <div>   
      <div class="d-grid gap-1 col-6 mx-auto mt-4">
        <button class="btn btn-primary" type="submit" id="boton-login">Login</button>
      </div>
      </div>
    </div>
  </form>
  `,
    script: ()=>{
        document.getElementById('boton-login').addEventListener('click', (e)=>{
            e.preventDefault();
            document.querySelector('#form3').classList.add('was-validated');
            if(form3.checkValidity()){
                form3.classList.remove('was-validated')
            }
        })
    }
}