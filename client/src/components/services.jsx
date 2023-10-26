import Cards from "./Cards";
const Services=()=>{
        return(
        <div className="services">
          <div className="service-top"> 
          <h2>Our Special dishes</h2>
          <p>Indulge in Culinary Delights: A Selection of Exquisite and Unique Creations from Our Special Dishes Menu</p>
          </div>
         
          <Cards/>
          <div>
          <i class="ri-circle-fill"></i>
          <i class="ri-circle-fill"></i>
          <i class="ri-circle-fill"></i>
          <i class="ri-circle-fill"></i>
          </div>
        </div>
        );
        
}
export default Services;