var taken = document.getElementsByClassName("fa fa-check-square");
var trash = document.getElementsByClassName("fa-trash");
let freqOfMedicine = document.getElementsByClassName('taken')


Array.from(taken).forEach(function(element) {
  element.addEventListener('click', function(){
    let postId = this.dataset.id
    // const name = this.parentNode.parentNode.childNodes[1].innerText
    let count = this.dataset.count
    // const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('medTaken', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'id': postId,
        'count': count
      })
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        let postId = this.dataset.id
        // let name = this.dataset.id
        // let freq = this.dataset.id
        const name = this.parentNode.parentNode.childNodes[1].innerText
        // const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('indaTrash', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'id': postId
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

