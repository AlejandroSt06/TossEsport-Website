import CategoryButton from "./CategoryButton"
function Category(){

    return (
<div class="d-flex flex-column  p-4 pt-0 px-0 pb-md-5 my-4 category-group">
<h2 className ="mb-0">Category</h2>
  <div class="list-group mt-4">
  <CategoryButton />
  <CategoryButton />
  <CategoryButton />
  </div>
</div>


    )
}
export default Category