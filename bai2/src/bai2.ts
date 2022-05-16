var arr = '';
var sanpham = [{
    ten: 'san pham 1',
    anh: '../img/sp1.jpg',
},
{
    ten: 'san pham 1',
    anh: '../img/sp1.jpg',
},
{
    ten: 'san pham 1',
    anh: '../img/sp1.jpg',
},
{
    ten: 'san pham 1',
    anh: '../img/sp1.jpg',
},
{
    ten: 'san pham 1',
    anh: '../img/sp1.jpg',
},
{
    ten: 'san pham 1',
    anh: '../img/sp1.jpg',
},
{
    ten: 'san pham 1',
    anh: '../img/sp1.jpg',
},
{
    ten: 'san pham 1',
    anh: '../img/sp1.jpg',
},
]
var sanphams=[{
    mTen:'JAPAN',
    anhs:'../img/sp2.jpg'
}]
for (let key in sanpham) {
    arr += `
    <div class="card" style="width: 18rem;">
    <img src="${sanpham[key].anh}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${sanpham[key].ten}</h5>
      <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Click vo day
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="card" style="width: 18rem;">
            <img src="${sanphams[0].anhs}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${sanphams[0].mTen}</h5>
        
      </div>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
    `
}
var moods = document.getElementById('mood');
moods.innerHTML = arr;