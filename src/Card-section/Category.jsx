import CategoryButton from "./CategoryButton"
function Category(){

    return (
<div class="d-flex flex-column  p-4 pt-0  pb-md-5  category-group">
<h2 className ="mt-2">Category</h2>
  <div class="list-group">
  <CategoryButton />
  <CategoryButton />
  <CategoryButton />
  </div>
</div>


    )
}
export default Category