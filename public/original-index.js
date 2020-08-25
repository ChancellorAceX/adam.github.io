const handleName = function(){
  $('#name').on('click',function(){
    $('main').html(
      `<p class='about name'>
        Hey there, I'm Adam. I'm an aspiring developer with a background in Biomedical Engineering.
      </p>
      <img src='./PersonalImage.JPG' class='myself' alt='Image of Adam Brown'>
      <p class='about name'>
        Thanks for visiting my page! Feel free to get to know me a little better or have a look a previous projects I've done. You can also contact me at any of the links below.
      </p>`
    );
  });
};

const handleAbout = function(){
  $('#about').on('click',function(){
    $('main').html(
      `<section class='about'>
        <p class='about'>
          I'm a recent graduate from the Engineering Immersion bootcamp at Thinkful where I learned how to implement various programming technologies and methodologies. I believe learning how to implement these new technologies, along with my background in Biomedical Engineering I received from Georgia Tech, makes me a valuable member of any team. These combined educations allows me a unique perspective on the process that most developers won't have. I understand the importance of continually thinking about the end user as a project is being developed, and all the complications that implies. That being said, I love problem solving, and I feel like I have finally found my niche to allow my unique skills to flourish.
        </p>
        <p class=about>
          Outside of coding I have several interests. I'm a DnD Dungeon Master and love playing all sorts of tabletop games. I'm a percussionist, avid video gamer (primarily RPG's), comic book fan, TV/movie enthusiast, and an all around general nerd. Every year you can find me at DragonCon either nerding out on one of my interests, messing with people as Deadpool, or just wandering around having a good time.
        </p>
      </section>`);
  });
};

const handleProjects = function(){
  $(`#projects`).on('click',function(){
    $('main').html(`<section class='projects' id='project1'>
      <h1>Bookmark Application</h1>
      <figure>
        <img class='projectimg' src='./Bookmark.PNG' alt='Bookmark application screenshot'>
        <figcaption>This application is designed to allow an individual to add, update, and delete bookmarks to a list where they can filter and manage them easily. The application uses an api interface and a store/state based design.</figcaption>
      </figure>
      <section class='icon-box'>
        <i class='fab fa-html5'></i>
        <i class='fab fa-css3-alt'></i>
        <i class="fab fa-js-square"></i>
        <img class='jquery-img' src='./jQuery.png' alt='jQuery icon image'>
      </section>
      <section class='buttonBox'>
        <button class='repolink button' id='bookmarkRepo' value='https://github.com/ChancellorAceX/bookmark-application-adam'>Project Repository</button>
        <button class='livelink button' id='bookmarkLive' value='https://chancelloracex.github.io/bookmark-application-adam/'>View Product</button>
      </section>
    </section>
    <div class='linebreak'></div>
    <section class='projects' id='project2'>
      <h1>Quiz Application</h1>
      <figure>
        <img class='projectimg' src='./Quiz.PNG' alt='Bookmark application screenshot'>
        <figcaption>An app where a user can get dynamic feeback and progress while navigating a quick 5 question quiz. The application features full-page rendering which means no need for multiple site links.</figcaption>
      </figure>
      <section class='icon-box'>
        <i class='fab fa-html5'></i>
        <i class='fab fa-css3-alt'></i>
        <i class="fab fa-js-square"></i>
        <img class='jquery-img' src='./jQuery.png' alt='jQuery icon image'>
      </section>
      <section class='buttonBox'>
        <button class='repolink button' id='quizRepo' value='https://github.com/ChancellorAceX/quiz-app-Adam-Kamela'>Project Repository</button>
        <button class='livelink button' id='quizLive' value='https://chancelloracex.github.io/quiz-app-Adam-Kamela/'>View Product</button>
      </section>
    </section>`);
    buttonHandler();
  });
};

const buttonHandler = function(){
  $('button').on('click',function(e){
    window.open($(e.currentTarget).val());
  });
};

const main = function(){
  handleProjects();
  handleAbout();
  handleName();
};

$(main);