import { Outlet } from "react-router-dom";
import Card from "../../../components/Card";

export default function Products() {
  return (
    <>
      <main>
        <section>
          <div className="container mt20">
            <div>
              <Card />
              <Outlet />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
