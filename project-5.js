console.log("This is the JavaScript File for the Project-5");

// Data is an array of objects which contains the information about the candidates
const data = [
 {
  name: 'Ajay Kumar',
  city: 'Kolkata',
  age: 34,
  language: 'Python',
  framework: 'Django',
  image: 'https://randomuser.me/api/portraits/men/75.jpg'
 },
 {
  name: 'Arpit Yadav',
  city: 'Gurgaon',
  age: 24,
  language: 'JavaScript',
  framework: 'Angular',
  image: 'https://randomuser.me/api/portraits/men/72.jpg'
 },
 {
  name: 'Arun Kumar',
  city: 'Bihar',
  age: 23,
  language: 'Java',
  framework: 'Core',
  image: 'https://randomuser.me/api/portraits/men/71.jpg'
 },
 {
  name: 'Javed Akhtar',
  city: 'Jaipur',
  age: 34,
  language: 'SQL',
  framework: 'DBA',
  image: 'https://randomuser.me/api/portraits/men/43.jpg'
 },
 {
  name: 'Sakshi Sharma',
  city: 'Sohna',
  age: 24,
  language: 'Python',
  framework: 'flask',
  image: 'https://randomuser.me/api/portraits/women/46.jpg'
 },
]

// CV Iterator:
function cvIterator(profiles){
 let nextIndex = 0;
 return{
  next: function(){
   return nextIndex<profiles.length ?
   {value: profiles[nextIndex++], done: false}:
   {done: true}
  }
 };
}
const candidates = cvIterator(data);
nextcv();

//button listener for next button:
let next = document.getElementById('nextBtn')
next.addEventListener('click', nextcv);

function nextcv(){
 let currentCandidates = candidates.next().value; 
 console.log("You clicked on next button");
 if(currentCandidates != undefined){
 let image = document.getElementById('image');
 let profile = document.getElementById('profile');
 image.innerHTML = `<img src='${currentCandidates.image}'></img>`;
 profile.innerHTML = `<ul class="list-group">
 <li class="list-group-item">Name:- ${currentCandidates.name}</li>
 <li class="list-group-item">Age:- ${currentCandidates.age}</li>
 <li class="list-group-item">Address:- ${currentCandidates.city}</li>
 <li class="list-group-item">Language:- ${currentCandidates.language}</li>
 <li class="list-group-item">FrameWork:- ${currentCandidates.framework}</li>
</ul>`;
 }
 else{
  alert('End of Candidate Applications');
  window.location.reload();
 }
}