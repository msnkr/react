import { use, useState } from "react";

import FooterComponent from "../components/FooterComponent";

const AboutUsPage = () => {
  return (
    <div>
      <div>
        <div className="content-section">
          <div className="">
            <p className=" primary-font">
              The Tycole Printing Process: Crafting Perfection in Every Print
            </p>
            <p>
              At Tycole Media & Print, we believe that exceptional printing is a
              combination of cutting-edge technology, skilled craftsmanship, and
              a deep understanding of design and materials. From concept to
              completion, we ensure that every project meets the highest
              standards of quality and precision.
            </p>
          </div>
          <div className="">
            <p className=" primary-font">
              Step 1: Consultation & Concept Development
            </p>
            <p>
              We help businesses enhance their brand identity with high-end
              corporate printing solutions, ensuring professionalism and
              consistency across all materials.
            </p>
          </div>
          <div className="">
            <p className=" primary-font">
              Step 2: Design & Prepress Preparation
            </p>
            <p>
              Before printing begins, our expert design team optimizes your
              files to ensure crisp, vibrant, and flawless results. Using
              advanced computer-to-plate technology, we ensure that every detail
              of your design is transferred with absolute precision, reducing
              errors and ensuring high-quality output.
            </p>
          </div>
          <div className="">
            <p className=" primary-font">
              Step 3: High-Quality Printing Execution
            </p>
            <p>
              With our state-of-the-art Litho and Digital printing technology,
              we bring your designs to life with sharp details and rich colors.
              Our printing methods allow for:
              <ul className="list-disc list-outside">
                <li>
                  <span className="">Bulk Printing</span> – Ideal for
                  large-scale projects, ensuring consistency across thousands of
                  prints.
                </li>
                <li>
                  <span className="">Short-Run Printing</span> – Perfect for
                  smaller batches, providing flexibility without compromising
                  quality.
                </li>
                <li>
                  <span className="">Custom Finishes</span> – Choose from a
                  variety of finishing options, including matte, gloss,
                  embossing, foiling, and UV spot varnish to enhance the look
                  and feel of your prints.
                </li>
              </ul>
            </p>
          </div>
          <div className="">
            <p className=" primary-font">Step 4: Precision Cutting & Binding</p>
            <p>
              From business cards to brochures, we offer precise cutting,
              folding, and binding solutions to give your prints a professional
              and polished finish. Our range of binding options includes:
              <ul className="list-disc list-outside">
                <li>
                  <span className="">Perfect Binding</span> – Ideal for books,
                  catalogues, and annual reports.
                </li>
                <li>
                  <span className="">Saddle Stitching</span> – A great option
                  for booklets, magazines, and brochures.
                </li>
                <li>
                  <span className="">Wire & Spiral Binding</span> – Practical
                  solutions for diaries, notepads, and planners.
                </li>
              </ul>
            </p>
          </div>
          <div className="">
            <p className=" primary-font">Step 5: Packaging & Delivery</p>
            <p>
              Once your prints are completed, we ensure they are packaged
              securely and delivered on time. Whether you need local delivery or
              pickup, we make sure your materials arrive in pristine condition,
              ready for use.
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <FooterComponent />
    </div>
  );
};

export default AboutUsPage;
