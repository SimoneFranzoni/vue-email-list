const app = new Vue({

    el: '#app',
  
    data: {
      emails: [],
      isLoading: true,
      httpError: false,
      totalMails: 10,

    },
    methods:{
  
      getEmails(){
        this.isLoading = true;
    
        for(let i = 0; i < this.totalMails; i++){
              
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {
              
          this.emails.push(r.data.response);
          if(this.emails.lenght === this.totalMails) this.isLoading = false;

          })
            
          .catch((error) =>{
          console.log('KO',error);
          // solo n questo caso viene visulizzato l'erroe
          this.httpError = true;
          })
        } 
  
      }
    },

    mounted(){
      this.getEmails();
    }
  
  
  
  
  
  
  })