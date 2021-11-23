const app = new Vue({

    el: '#app',
  
    data: {
      emails: [],
      isLoading: false,
      httpError: false,
      totalMails: 10,

    },
    methods:{
  
      getEmails(){
        console.log('getEmails');
        this.isLoading = true;
    
        for(let i = 0; i < this.totalMails; i++){
          console.log('getEmails', i);
              
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {
            
            console.log('getEmails', response);

            this.emails.push(response.data.response);
            if(this.emails.length === this.totalMails) this.isLoading = false;

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