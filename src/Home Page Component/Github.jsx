import ThreeDTextEffect from "../3-D Text/ThreeDTextEffect";
export default function Github() {
    return (
      <>
        <div style={{backgroundColor: 'var(--bg-clr)'}} className="flex justify-center pb-12 bg-slate-900"> {/* Added flex and justify-center classes */}
          <div>
            <h1 className=" mt-28 mb-48" data-aos="fade-right">
              <ThreeDTextEffect title="My GitHub Activity Graph"/>
            </h1>
            <div data-aos="fade-in">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=deepti3004&bg_color=0f2d3d&color=1cadfb&line=1cadfb&point=1cadfb&area=true&hide_border=true"
              alt="Deepti's GitHub Activity Graph"
            />
            </div>
          </div>
        </div>
      </>
    );
  }
  