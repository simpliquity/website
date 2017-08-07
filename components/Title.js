import React from "react";
import View from "./View.js";

const Title = (props) => {
    return (
      <div>
        <View
            viewId="home"
        >

              <div
                  style={{
                    position: "relative",
                    zIndex: "2",
                    margin: "0 auto",
                    maxWidth: "720px",
                    textAlign: "center",
                    maxHeight: "1203px",
                  }}>
                <h1 style={{
                  marginBottom: "24px",
                  color: "#272727",
                  fontSize: "44px",
                }}>
                Simple Concrete Collaborative
              </h1>
                <p style={{
                  marginBottom: "24px",
                  color: "#595959",
                  fontSize: "22",
                }}>
                Learning Technologies</p>
              </div>
                <video id="my-video" class="video" poster="/videoC.png" autoPlay loop
                style={{
                  top: "50%",
                  left: "50%",
                   zIndex: "1",
                  minWidth: "100%",
                  minHeight: "auto",
                  height: "auto",
                  width: "100%",
                  marginTop: "-240px",

                }}>
                  <source src="/video.mp4" type="video/mp4"/>
                </video>
        </View>
      </div>
    )
}

export default Title;

// import React from "react";
// import View from "./View.js";
//
// const Title = (props) => {
//     return (
//         <View
//             viewId="home"
//         >
//             <section
//                 className="hero is-fullheight"
//                 style={{
//                     backgroundColor:"black",
//                     paddingTop: "5rem",
//                 }}
//             >
//                 <div
//                     className="hero-body"
//                     style={{
//                         backgroundImage: "url(\"blackboard.jpg\")"
//                     }}
//                 >
//                     <div className="container">
//                         <h1
//                             className="title"
//                             style={{
//                                 fontSize: "3rem",
//                                 color: "white",
//                             }}
//                         >
//                             Learning environments
//                         </h1>
//                         <h2
//                             className="subtitle"
//                             style={{
//                                 fontSize: "1.5rem",
//                                 color: "#aaa"
//                             }}
//                         >
//                             Web and mobile apps
//                         </h2>
//                     </div>
//                 </div>
//             </section>
//         </View>
//     )
// }
//
// export default Title;
