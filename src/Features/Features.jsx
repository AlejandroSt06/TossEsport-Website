import FeatureCard from "./FeatureCard";
function Features(){
return(

<div class="container px-4 py-3" id="icon-grid">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
<FeatureCard />
<FeatureCard />
<FeatureCard />
<FeatureCard />
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
<FeatureCard />
<FeatureCard />
<FeatureCard />
<FeatureCard />
    </div>
  </div>
)



}

export default Features;