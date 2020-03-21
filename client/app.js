$(document).ready(() => {
  let chirps = [];
  // let list = $("#ul");
  let user;
  let text;
  fetchChirps();

  $("#fireChirp").click(() => {
    user = $("#user").val();
    text = $("#text").val();
    //make a post request with those values
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:3000/api/chirps/",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({
        user: `${user}`,
        text: `${text}`
      })
    }).catch(err => console.log(err));
    // event.preventDefault();
  });
});

const fetchChirps = () => {
  $("#list").empty();
  $.get("/api/chirps/", chirps => {
    delete chirps.nextid;
    let entries = Object.entries(chirps);
    entries.reverse();
    entries.forEach(chirp => {
      $("#list").append(
        `<div>
        <li>${chirp[1].user}: ${chirp[1].text}</li>
        </div>`
      );
    });
  });
};

const deleteChirp = id => {
  $.delete(`/api/chirps/${id}`)
  .then(fetchChirps)
  .catch(err => console.log (err))
}

const updateChirp = id => {
  $.put(`/api/chirps/${id}`)
  .then(fetchChirps)
  .catch(err => console.log (err))
}