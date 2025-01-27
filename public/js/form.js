const form = document.querySelector('form'),
   nom = document.querySelector('#nom'),
   depart = document.querySelector('#depart'),
   destination = document.querySelector('#destination'),
   tel = document.querySelector('#tel'),
   dateTime = document.querySelector('#dateTime'),
   nombre = document.querySelector('#nombre'),
   email = document.querySelector('#email');
form.addEventListener('submit', async e => {
   e.preventDefault();
   const name = nom.value,
      start = depart.value,
      destinations = destination.value,
      numbers = nombre.value,
      tele = tel.value,
      dates = dateTime.value,
      emails = email.value;
   try {
      await axios.post('/.netlify/functions/sendEmail', {
         name,
         start,
         destinations,
         tele,
         dates,
         numbers,
         emails
      });
      nom.value = "", depart.value = "", destination.value = "", nombre.value = "", email.value = "",tel.value = ""
   } catch (error) {
      console.error("oups! elle y a une erreur:", error)
   }
});