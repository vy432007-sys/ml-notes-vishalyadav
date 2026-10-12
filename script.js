
const menuBtn = document.querySelector("#menu-btn");
const sidebar = document.querySelector("#sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});


const lectures = {
  1: {
    title: "Lecture 1 — What Is Machine Learning?",
    content: `
      <section>
        <h2>1. Introduction to the Machine Learning Series</h2>

        <p>
          Machine Learning (ML) is an important area of Artificial
          Intelligence (AI). It focuses on developing systems that
          can learn patterns from data and use those patterns to make
          predictions or decisions.
        </p>

        <p>
          The objective of studying ML is not merely to memorize
          algorithms. We need to understand why an algorithm is used,
          what problem it solves, how it learns from data, and how
          we evaluate its performance.
        </p>

        <h3>What should we learn while studying ML?</h3>
        <ul>
          <li>The meaning and purpose of Machine Learning.</li>
          <li>The difference between traditional programming and ML.</li>
          <li>Real-world applications of ML.</li>
          <li>How data is used to train a model.</li>
          <li>How a trained model makes predictions.</li>
          <li>How to measure and improve model performance.</li>
        </ul>
      </section>

      <section>
        <h2>2. What Is Machine Learning?</h2>

        <p>
          Machine Learning is a field of AI in which computers learn
          patterns or relationships from examples and use what they
          have learned to perform a task on new data.
        </p>

        <p>
          In traditional programming, a programmer explicitly writes
          rules to solve a problem. In many ML problems, writing all
          the rules manually is difficult. Instead, we provide data
          to a learning algorithm, which learns a model from that data.
        </p>

        <h3>Example: Predicting house prices</h3>

        <p>
          Suppose we want to predict the price of a house. Price may
          depend on the area of the house, its location, the number
          of bedrooms, its age, and other factors.
        </p>

        <p>
          It would be difficult to write a perfect rule manually for
          every possible combination of these features. Instead, we
          can provide historical examples containing house features
          and their actual prices. An ML algorithm can learn
          relationships from these examples.
        </p>

        <pre>
Historical house data
        ↓
Learning algorithm
        ↓
Trained ML model
        ↓
Features of a new house
        ↓
Predicted house price
        </pre>

        <p>
          The prediction is an estimate, not a guarantee. Its
          accuracy depends on factors such as data quality,
          the suitability of the model, and how representative
          the training examples are.
        </p>

        <h3>Important terminology</h3>

        <ul>
          <li><strong>Data:</strong> Examples or observations used to learn patterns.</li>
          <li><strong>Features:</strong> Input variables used to make a prediction, such as house area.</li>
          <li><strong>Target:</strong> The value we want to predict, such as house price.</li>
          <li><strong>Algorithm:</strong> The procedure used to learn from data.</li>
          <li><strong>Model:</strong> The learned relationship that can produce predictions.</li>
          <li><strong>Prediction:</strong> The model's output for a given input.</li>
        </ul>
      </section>

      <section>
        <h2>3. Traditional Programming vs Machine Learning</h2>

        <h3>3.1 Traditional programming</h3>

        <p>
          In traditional programming, the programmer defines the
          rules or logic needed to solve a problem. The computer
          executes those instructions on the supplied input.
        </p>

        <pre>
Input Data + Explicitly Written Rules
                  ↓
                Program
                  ↓
                Output
        </pre>

        <p>
          Example: To add two numbers, the programmer uses an
          addition operation. The computer does not need to learn
          how addition works from thousands of examples.
        </p>

        <p><strong>Example:</strong> If a = 5 and b = 3, then a + b = 8.</p>

        <h3>3.2 Machine Learning</h3>

        <p>
          In a typical supervised ML task, we provide examples of
          inputs and their correct outputs. A learning algorithm
          uses these examples to learn a relationship. The resulting
          model can then make predictions for new inputs.
        </p>

        <pre>
Training Inputs + Correct Outputs
                  ↓
          Learning Algorithm
                  ↓
             Trained Model
                  ↓
             New Input
                  ↓
              Prediction
        </pre>

        <h3>3.3 Comparison table</h3>

        <table>
          <thead>
            <tr>
              <th>Basis</th>
              <th>Traditional Programming</th>
              <th>Machine Learning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Logic</td>
              <td>Rules are explicitly written by a programmer.</td>
              <td>Patterns are learned from data.</td>
            </tr>
            <tr>
              <td>Input during development</td>
              <td>Data and programmed rules.</td>
              <td>Training data and a learning procedure.</td>
            </tr>
            <tr>
              <td>Output</td>
              <td>Result produced by executing the rules.</td>
              <td>A trained model that can make predictions.</td>
            </tr>
            <tr>
              <td>Best suited for</td>
              <td>Problems with clear, explicit rules.</td>
              <td>Problems where useful patterns can be learned from data.</td>
            </tr>
            <tr>
              <td>Example</td>
              <td>Calculating tax using specified tax rules.</td>
              <td>Estimating house prices from historical examples.</td>
            </tr>
          </tbody>
        </table>

        <h3>3.4 Why not use ML for everything?</h3>

        <p>
          ML is not automatically better than traditional programming.
          If a problem has clear rules and can be solved reliably
          with ordinary code, a traditional program may be simpler,
          cheaper, easier to test, and easier to maintain.
        </p>

        <p>
          ML is particularly useful when patterns are complex,
          difficult to express manually, and can be learned from
          suitable examples.
        </p>
      </section>

      <section>
        <h2>4. Why Do We Need Machine Learning?</h2>

        <p>
          Many real-world problems involve large amounts of data
          and complicated relationships. Writing a separate rule
          for every situation can be impractical.
        </p>

        <h3>4.1 Complex patterns</h3>

        <p>
          Consider spam detection. Spam emails may contain different
          words, links, writing styles, and combinations of signals.
          It is difficult to create a fixed list of rules that
          identifies every spam message.
        </p>

        <p>
          A model trained on labelled examples can learn combinations
          of patterns associated with spam and legitimate email.
        </p>

        <h3>4.2 Large datasets</h3>

        <p>
          Organisations collect data from websites, transactions,
          sensors, applications, and many other sources. ML can
          help analyse these datasets and discover useful patterns.
        </p>

        <h3>4.3 Predictions from past observations</h3>

        <p>
          Historical data can help estimate future outcomes.
          Examples include predicting demand, estimating delivery
          times, and forecasting equipment failures.
        </p>

        <h3>4.4 Adaptation</h3>

        <p>
          When new representative data becomes available, an ML
          system can sometimes be retrained or updated to reflect
          changing patterns. This requires suitable monitoring
          and evaluation; models do not automatically improve
          merely because time passes.
        </p>
      </section>

      <section>
        <h2>5. Applications of Machine Learning</h2>

        <h3>5.1 Email spam detection</h3>

        <p>
          An email system can use signals such as message text,
          sender information, links, and previous labelled examples
          to estimate whether a message is spam.
        </p>

        <p><strong>Input:</strong> Email-related features.</p>
        <p><strong>Output:</strong> A spam prediction or score.</p>

        <h3>5.2 Image classification</h3>

        <p>
          An image-classification model receives an image and predicts
          which category it belongs to. For example, it may classify
          an image as a cat, dog, car, or tree.
        </p>

        <pre>
Image
  ↓
Trained image model
  ↓
Predicted category: Dog
        </pre>

        <p>
          The model learns useful visual patterns from training
          images. Its predictions can still be wrong, particularly
          when images differ significantly from the training data.
        </p>

        <h3>5.3 Recommendation systems</h3>

        <p>
          Streaming platforms and online stores may use information
          about user activity, item characteristics, and interactions
          to recommend content or products that a user may find relevant.
        </p>

        <h3>5.4 Data mining and pattern discovery</h3>

        <p>
          Data mining involves discovering useful patterns and
          relationships in datasets. ML techniques can support
          tasks such as grouping similar observations, identifying
          unusual activity, and predicting outcomes.
        </p>

        <h3>5.5 Other examples</h3>

        <ul>
          <li>Speech recognition and voice assistants.</li>
          <li>Fraud detection in financial transactions.</li>
          <li>Demand forecasting in businesses.</li>
          <li>Predictive maintenance for machines.</li>
          <li>Medical image analysis to assist qualified professionals.</li>
        </ul>
      </section>

      <section>
        <h2>6. Why Has Machine Learning Become So Important?</h2>

        <h3>6.1 Growth in available data</h3>

        <p>
          Digital services, mobile devices, websites, sensors, and
          online transactions generate large amounts of data.
          These observations can provide examples from which
          learning algorithms discover patterns.
        </p>

        <h3>6.2 Improvements in computing hardware</h3>

        <p>
          Faster processors, GPUs, cloud computing, and improved
          computing infrastructure have made it possible to train
          many models on larger datasets and perform more
          computationally demanding tasks.
        </p>

        <h3>6.3 Improvements in algorithms and tools</h3>

        <p>
          Research has produced better learning methods, while
          software libraries and development tools have made
          experimentation more accessible.
        </p>

        <p>
          These factors work together. Large datasets alone do not
          guarantee a good model: data quality, algorithm choice,
          computing resources, and evaluation all matter.
        </p>
      </section>

      <section>
        <h2>7. Career Scope of Machine Learning</h2>

        <p>
          Machine Learning knowledge is useful across technology,
          finance, healthcare, retail, manufacturing, agriculture,
          and many other industries. Different roles require
          different combinations of programming, mathematics,
          statistics, data engineering, and domain knowledge.
        </p>

        <ul>
          <li><strong>Data Analyst:</strong> Analyses data to answer questions and communicate findings.</li>
          <li><strong>Data Scientist:</strong> Uses statistics, programming, and modelling to investigate data and build predictive solutions.</li>
          <li><strong>ML Engineer:</strong> Develops, deploys, and maintains machine-learning systems.</li>
          <li><strong>AI Researcher:</strong> Investigates new algorithms, models, and learning methods.</li>
          <li><strong>Data Engineer:</strong> Builds systems that collect, transform, and deliver data for analysis and modelling.</li>
        </ul>

        <h3>Foundational skills</h3>

        <ul>
          <li>Python programming.</li>
          <li>Mathematics, especially linear algebra and calculus.</li>
          <li>Probability and statistics.</li>
          <li>Data handling and visualisation.</li>
          <li>ML algorithms and model evaluation.</li>
          <li>Problem-solving and communication.</li>
        </ul>

        <p>
          A strong foundation matters more than learning many
          libraries without understanding the underlying concepts.
        </p>
      </section>

      <section>
        <h2>8. Machine Learning Development Life Cycle</h2>

        <p>
          Building an ML solution involves more than selecting an
          algorithm. A typical workflow includes understanding the
          problem, preparing data, training models, evaluating them,
          and deploying the selected solution.
        </p>

        <pre>
1. Problem definition
         ↓
2. Data collection
         ↓
3. Data preparation
         ↓
4. Exploratory data analysis
         ↓
5. Feature engineering
         ↓
6. Model selection and training
         ↓
7. Evaluation
         ↓
8. Deployment and monitoring
         ↺
   Improvement when needed
        </pre>

        <h3>Stage 1: Problem definition</h3>
        <p>
          Define the task, the intended users, the target variable
          if applicable, and the measure of success. For example,
          determine whether the goal is to predict house prices
          or classify emails as spam.
        </p>

        <h3>Stage 2: Data collection</h3>
        <p>
          Gather relevant observations from suitable sources.
          The data should be appropriate for the problem and
          collected and used responsibly.
        </p>

        <h3>Stage 3: Data preparation</h3>
        <p>
          Inspect missing values, incorrect entries, duplicates,
          inconsistent formats, and other quality issues. Prepare
          the data so it can be used reliably.
        </p>

        <h3>Stage 4: Exploratory data analysis</h3>
        <p>
          Use summary statistics and visualisations to understand
          distributions, relationships, unusual observations, and
          possible problems in the dataset.
        </p>

        <h3>Stage 5: Feature engineering</h3>
        <p>
          Select, transform, or construct useful input variables.
          Good features can help a model learn relevant patterns.
        </p>

        <h3>Stage 6: Model selection and training</h3>
        <p>
          Choose a suitable algorithm and fit it to the training
          data. Different algorithms may behave differently
          depending on the task and dataset.
        </p>

        <h3>Stage 7: Evaluation</h3>
        <p>
          Test the model on data that was not used to fit it.
          Choose evaluation metrics appropriate to the problem
          and check whether the model generalises to new examples.
        </p>

        <h3>Stage 8: Deployment and monitoring</h3>
        <p>
          Integrate the model into a usable system, monitor its
          performance, and update it when justified by new data
          or changing requirements.
        </p>

        <p>
          <strong>Remember:</strong> The workflow is iterative.
          Evaluation may reveal a need to improve the data,
          features, model, or problem definition.
        </p>
      </section>

      <section>
        <h2>9. Quick Revision Notes</h2>

        <ul>
          <li>Machine Learning is a field of Artificial Intelligence.</li>
          <li>ML models learn patterns from examples or data.</li>
          <li>Traditional programs execute explicitly written rules.</li>
          <li>A feature is an input variable; a target is the value to predict.</li>
          <li>A learning algorithm learns a model from training data.</li>
          <li>ML can support classification, prediction, recommendation, and pattern discovery.</li>
          <li>More data does not automatically mean better predictions.</li>
          <li>Models must be evaluated on suitable unseen data.</li>
          <li>The ML development life cycle includes preparation, training, evaluation, deployment, and monitoring.</li>
        </ul>
      </section>

      <section>
        <h2>10. Practice Questions</h2>

        <h3>Conceptual questions</h3>
        <ol>
          <li>Define Machine Learning in your own words.</li>
          <li>Explain the difference between traditional programming and ML.</li>
          <li>Why might ML be useful for email spam detection?</li>
          <li>What is the difference between a feature and a target?</li>
          <li>Explain how a model learns from training examples.</li>
          <li>Why can a trained model make incorrect predictions?</li>
          <li>Explain the roles of data and computing hardware in ML development.</li>
          <li>List the stages of a typical ML development life cycle.</li>
        </ol>

        <h3>Application questions</h3>
        <ol>
          <li>
            You have historical house data containing area, location,
            and sale price. Identify the features and target for
            predicting the price of a new house.
          </li>
          <li>
            Explain how a system could use labelled emails to learn
            to distinguish spam from legitimate messages.
          </li>
          <li>
            Give one problem that is better solved with explicit
            rules than ML, and explain why.
          </li>
        </ol>
      </section>
    `
  }
};


const notesArea = document.querySelector("#notes-area");
const lectureButtons = document.querySelectorAll(".lecture-btn");

lectureButtons.forEach(button => {
  button.addEventListener("click", () => {
    const lectureNumber = button.dataset.lecture;
    const lecture = lectures[lectureNumber];
    if (notesArea.dataset.openLecture === lectureNumber) {
      notesArea.innerHTML = "";
      delete notesArea.dataset.openLecture;
      button.classList.remove("active");
      return;
    }

    if (!lecture) return;

    notesArea.innerHTML = `
      <h1>${lecture.title}</h1>
      ${lecture.content}
    `;
    notesArea.dataset.openLecture = lectureNumber;

    lectureButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
