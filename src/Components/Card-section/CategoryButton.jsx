function CategoryButton(){

return(
    <a href="#" class="list-group-item category-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true" >
      <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0" />
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">List group item heading</h6>
          <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
        </div>
        <small class="opacity-50 text-nowrap">now</small>
      </div>
    </a>
)


}
export default CategoryButton