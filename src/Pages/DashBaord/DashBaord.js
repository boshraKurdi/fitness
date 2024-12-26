import MyGoal from "../../components/DashBaord/MyGoal/MyGoal";
import MyPlan from "../../components/DashBaord/MyPlan/MyPlan";
import "../../components/Home/Goal/Goal.css";
export default function DashBaord() {
  console.log('dashbaord page')
  return (
      <main>
        <article>
          <MyGoal />
          <MyPlan />
        </article>
      </main>
  );
}
