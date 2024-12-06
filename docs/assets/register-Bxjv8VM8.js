import{r as p,i as h,n as c,b as u,p as b,S as s,x as v,t as g}from"./Header-CzTFeK5e.js";import{g as w}from"./index-DjKJqAo0.js";var f=Object.defineProperty,m=Object.getOwnPropertyDescriptor,d=(i,e,r,l)=>{for(var t=l>1?void 0:l?m(e,r):e,n=i.length-1,a;n>=0;n--)(a=i[n])&&(t=(l?a(e,r,t):a(t))||t);return l&&t&&f(e,r,t),t};let o=class extends u{constructor(){super(...arguments),this.valid={step1:!1,step2:!1}}get idInput(){return this.renderRoot.querySelector("#idField")}get pwInput(){return this.renderRoot.querySelector("#pwField")}handleValidation(i){const e=i.currentTarget,r=e.id==="idField"?"step1":"step2";this.valid[r]=e.value.length>5,e.value.length>5&&this.requestUpdate()}handleStep1(){const i=this.renderRoot.querySelector(".wrapper");w.to(i,{x:-460})}handleStep2(){b.collection("users").create({email:this.idInput.value,password:this.pwInput.value,passwordConfirm:this.pwInput.value}).then(()=>{s.fire({text:"회원가입 완료! 로그인 페이지로 이동합니다."}).then(()=>{location.href="/src/pages/login/"})}).catch(()=>{s.fire({text:"잘못된 정보를 입력하셨습니다."}).then(()=>{location.reload()})})}render(){return v`
      <div class="container">
        <h2>회원가입</h2>
        <div class="line">
          <div></div>
        </div>
        <div class="wrapper">
          <div class="step-1">
            <h3>
              로그인에 사용할 아이디를 입력해주세요.
            </h3>
            <label for="idField"></label>
            <input 
              @input=${this.handleValidation}
              type="email" 
              id="idField" 
              placeholder="아이디(이메일)입력"/>
            <button 
            @click=${this.handleStep1}
            ?disabled=${!this.valid.step1}
            type="button" 
            class="next-1">다음</button>
          </div>
          <div class="step-2">
            <h3>
              로그인에 사용할 비밀번호를 입력해주세요.
            </h3>
            <label for="pwField"></label>
            <input 
            @input=${this.handleValidation}
            type="password" 
            id="pwField" 
            placeholder="비밀번호 입력"/>
            <button 
            @click=${this.handleStep2}
            ?disabled=${!this.valid.step2}
            type="button" 
            class="next-2">회원가입</button>
          </div>
        </div>
      </div>
    `}};o.styles=[p,h`
    .container{

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      width: 440px;
      /* border: 1px solid red; */
      overflow: hidden;
      padding: 1rem;

      & h2{
        font-size: 3rem;
        font-weight: bold;
      }

      .line{
        height: 4px;
        background-color: white;
        margin-bottom: 1rem;

        & div{
          width: 30%;
          height: 100%;
          background: hotpink;
        }
      }

      .wrapper{
        width: 900px;
        display: flex;
        justify-content: space-between;

        & > div{
          width: 440px;
          display:flex;
          flex-direction: column;
          gap:1rem
        }

        & input{
          border: 1px solid white;
          padding: 1rem;
          min-width: 200px;
          margin: 0.5rem 0;
          outline: none;
        }

        & button{
          margin-top: 1.5rem;
          background-color: pink;
          color: #242424;
          border: none;
          padding: 1rem;
          cursor: pointer;

          &:disabled{
            background-color: #848484;
            color:black;
            cursor: not-allowed;
          }
        }
      }
    }
    `];d([c({type:Object})],o.prototype,"valid",2);o=d([g("register-element")],o);
