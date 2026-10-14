// Mobile menu
const menuBtn = document.querySelector("#menu-btn");
const sidebar = document.querySelector("#sidebar");

if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });
}

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
          links, sender information, and other characteristics
          to predict whether an email is spam.
        </p>

        <h3>5.2 Recommendation systems</h3>

        <p>
          Streaming platforms and online stores can use past
          behaviour to recommend movies, music, products, or other
          content that may interest a user.
        </p>

        <h3>5.3 Healthcare</h3>

        <p>
          ML models can help analyse medical images and other
          healthcare data. Their predictions need appropriate
          validation and should not automatically replace
          professional judgement.
        </p>

        <h3>5.4 Finance</h3>

        <p>
          ML can help identify unusual transactions, estimate
          financial risks, and detect patterns that may indicate
          fraudulent activity.
        </p>

        <h3>5.5 Transportation</h3>

        <p>
          ML is used in applications such as traffic prediction,
          route estimation, and perception systems in vehicles.
        </p>

        <h3>5.6 Natural Language Processing</h3>

        <p>
          ML helps computers process and generate human language.
          Examples include translation, text classification,
          chatbots, and speech-related applications.
        </p>

        <h3>5.7 Computer Vision</h3>

        <p>
          Computer Vision uses computational methods to analyse
          images and videos. Applications include object detection,
          image classification, and face detection.
        </p>
      </section>

      <section>
        <h2>6. What Makes Machine Learning Possible?</h2>

        <h3>6.1 Availability of data</h3>

        <p>
          ML algorithms learn from examples. More data can sometimes
          help a model learn better patterns, provided that the data
          is relevant, sufficiently representative, and of good quality.
        </p>

        <h3>6.2 Computing power</h3>

        <p>
          Modern processors and GPUs make it possible to perform
          the large number of calculations required by many
          ML algorithms, especially Deep Learning models.
        </p>

        <h3>6.3 Better algorithms and tools</h3>

        <p>
          Improvements in algorithms, programming libraries,
          and development tools make it easier to train, evaluate,
          and deploy ML models.
        </p>

        <h3>6.4 Storage and cloud computing</h3>

        <p>
          Modern storage systems and cloud platforms allow
          organisations to store and process large datasets
          and access computing resources when required.
        </p>
      </section>

      <section>
        <h2>7. Basic Machine Learning Development Life Cycle</h2>

        <ol>
          <li><strong>Define the problem:</strong> Decide what you want to predict or classify.</li>
          <li><strong>Collect data:</strong> Obtain relevant examples for the task.</li>
          <li><strong>Prepare data:</strong> Clean the data and handle missing or incorrect values.</li>
          <li><strong>Explore data:</strong> Understand distributions, relationships, and possible patterns.</li>
          <li><strong>Choose a model:</strong> Select an algorithm suitable for the problem.</li>
          <li><strong>Train the model:</strong> Let the algorithm learn from training data.</li>
          <li><strong>Evaluate the model:</strong> Test its performance on data not used for training.</li>
          <li><strong>Improve the model:</strong> Adjust the approach if performance is inadequate.</li>
          <li><strong>Deploy the model:</strong> Make the model available for real-world use.</li>
          <li><strong>Monitor the model:</strong> Check its performance and update it when necessary.</li>
        </ol>

        <pre>
Problem Definition
        ↓
Data Collection
        ↓
Data Preparation
        ↓
Model Training
        ↓
Model Evaluation
        ↓
Deployment
        ↓
Monitoring and Improvement
        </pre>
      </section>

      <section>
        <h2>8. Quick Revision</h2>

        <ul>
          <li>Machine Learning is a field of Artificial Intelligence.</li>
          <li>ML learns patterns from data instead of relying only on manually written rules.</li>
          <li>Features are the inputs; the target is what we want to predict.</li>
          <li>An algorithm learns a model from training data.</li>
          <li>A trained model can make predictions on new inputs.</li>
          <li>Data quality and model evaluation are important for reliable predictions.</li>
          <li>ML is useful for complex patterns, but it is not necessary for every problem.</li>
        </ul>
      </section>

      <section>
        <h2>9. Practice Questions</h2>

        <ol>
          <li>What is Machine Learning?</li>
          <li>Explain the difference between traditional programming and ML.</li>
          <li>What are features and targets? Give an example.</li>
          <li>How can ML be used to predict house prices?</li>
          <li>Why is ML useful for spam detection?</li>
          <li>Give five real-world applications of ML.</li>
          <li>List the main stages in the ML development life cycle.</li>
          <li>Why should we evaluate a model on data not used during training?</li>
          <li>Does having more data always guarantee a better model? Explain briefly.</li>
          <li>Why should we not use ML for every problem?</li>
        </ol>
      </section>
    `
  },

  2: {
    title: "Lecture 2: AI vs ML vs DL",
    content: `
      <section>
        <h2>1. Introduction</h2>

        <p>
          Artificial Intelligence (AI), Machine Learning (ML), and
          Deep Learning (DL) are related concepts, but they do not
          mean the same thing.
        </p>

        <p>
          AI is the broadest field. ML is a part of AI, and Deep
          Learning is a part of ML.
        </p>

        <pre>
Artificial Intelligence (AI)
        └── Machine Learning (ML)
                └── Deep Learning (DL)
        </pre>

        <p>
          This means that every Deep Learning system is a Machine
          Learning system, and ML is part of AI. However, not every
          AI system uses ML, and not every ML system uses DL.
        </p>
      </section>

      <section>
        <h2>2. What Is Artificial Intelligence?</h2>

        <p>
          Artificial Intelligence is the broad field of building
          machines or computer systems that can perform tasks
          associated with intelligence, such as reasoning,
          problem-solving, planning, and understanding language.
        </p>

        <h3>Example: Rule-based system</h3>

        <p>
          Imagine a simple system that follows a set of rules:
        </p>

        <pre>
IF temperature is high
THEN turn on the fan
        </pre>

        <p>
          The system follows rules written by a human. It does not
          necessarily learn from examples. It can still be considered
          an AI approach in a broad, rule-based sense.
        </p>

        <h3>Examples of AI tasks</h3>

        <ul>
          <li>Planning a route from one location to another.</li>
          <li>Solving a puzzle using logical rules.</li>
          <li>Playing a game using search and decision-making.</li>
          <li>Understanding and generating human language.</li>
          <li>Making decisions based on available information.</li>
        </ul>
      </section>

      <section>
        <h2>3. What Is Machine Learning?</h2>

        <p>
          Machine Learning is a subset of AI. It enables computer
          systems to learn patterns from data and use those patterns
          to make predictions or decisions.
        </p>

        <p>
          Instead of manually writing every rule, we provide
          examples to a learning algorithm. The algorithm learns
          a model that can be used on new data.
        </p>

        <h3>Example: Spam detection</h3>

        <p>
          Suppose we want to classify emails as spam or not spam.
          We provide examples of emails along with their labels.
          An ML algorithm learns patterns from these examples.
        </p>

        <pre>
Emails + Correct Labels
        ↓
Learning Algorithm
        ↓
Trained Model
        ↓
New Email
        ↓
Spam / Not Spam
        </pre>

        <h3>Important terms</h3>

        <ul>
          <li><strong>Data:</strong> Examples used for learning.</li>
          <li><strong>Features:</strong> Information used as input to the model.</li>
          <li><strong>Labels:</strong> Correct categories or outputs supplied during training in supervised learning.</li>
          <li><strong>Algorithm:</strong> The procedure that learns from examples.</li>
          <li><strong>Model:</strong> The learned system used to make predictions.</li>
        </ul>

        <h3>Examples of ML</h3>

        <ul>
          <li>Predicting house prices.</li>
          <li>Detecting fraudulent transactions.</li>
          <li>Recommending movies.</li>
          <li>Predicting customer demand.</li>
        </ul>
      </section>

      <section>
        <h2>4. What Is Deep Learning?</h2>

        <p>
          Deep Learning is a subset of Machine Learning that uses
          neural networks with multiple layers to learn patterns
          from data.
        </p>

        <p>
          These networks contain connected computational units
          called artificial neurons. During training, the network
          adjusts its parameters to reduce prediction errors.
        </p>

        <h3>Why is it called Deep Learning?</h3>

        <p>
          It is called "deep" because the neural network contains
          multiple processing layers between its input and output.
          These layers can learn increasingly complex representations
          of the data.
        </p>

        <pre>
Input Data
    ↓
Input Layer
    ↓
Hidden Layer 1
    ↓
Hidden Layer 2
    ↓
Hidden Layer 3
    ↓
Output Layer
    ↓
Prediction
        </pre>

        <p>
          This is a simplified illustration. Actual neural networks
          can have different architectures and numbers of layers.
        </p>

        <h3>Example: Image recognition</h3>

        <p>
          Imagine training a model to identify cats in images.
          Earlier layers may learn simple visual patterns, such as
          edges and textures. Deeper layers can combine these into
          more complex patterns, such as shapes and object parts.
          The final output can represent the predicted class.
        </p>

        <h3>Applications of Deep Learning</h3>

        <ul>
          <li>Image and object recognition.</li>
          <li>Speech recognition.</li>
          <li>Language models and text generation.</li>
          <li>Video analysis.</li>
          <li>Some autonomous driving systems.</li>
        </ul>
      </section>

      <section>
        <h2>5. AI vs ML vs DL: Comparison</h2>

        <table>
          <thead>
            <tr>
              <th>Basis</th>
              <th>AI</th>
              <th>ML</th>
              <th>DL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Meaning</td>
              <td>Broad field of intelligent systems.</td>
              <td>Systems learn patterns from data.</td>
              <td>ML using multi-layer neural networks.</td>
            </tr>
            <tr>
              <td>Scope</td>
              <td>Broadest category.</td>
              <td>Subset of AI.</td>
              <td>Subset of ML.</td>
            </tr>
            <tr>
              <td>Approach</td>
              <td>May use rules, search, planning, ML, or other methods.</td>
              <td>Uses algorithms to learn patterns from data.</td>
              <td>Uses neural networks with multiple layers.</td>
            </tr>
            <tr>
              <td>Data</td>
              <td>Depends on the method.</td>
              <td>Training data is generally important.</td>
              <td>Often benefits from large datasets.</td>
            </tr>
            <tr>
              <td>Feature learning</td>
              <td>Depends on the method.</td>
              <td>Features may be designed manually or learned.</td>
              <td>Can learn useful features automatically.</td>
            </tr>
            <tr>
              <td>Example</td>
              <td>Rule-based puzzle solver.</td>
              <td>House-price prediction using a decision tree.</td>
              <td>Neural network for image recognition.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>6. Traditional ML vs Deep Learning</h2>

        <h3>Traditional Machine Learning</h3>

        <p>
          In many traditional ML workflows, people identify or
          construct useful features before training the model.
          For example, an image classification system might use
          manually designed measurements as inputs.
        </p>

        <h3>Deep Learning</h3>

        <p>
          Deep Learning models can learn useful representations
          directly from raw or minimally processed data. For
          example, a neural network can learn visual features
          from image pixels during training.
        </p>

        <table>
          <thead>
            <tr>
              <th>Basis</th>
              <th>Traditional ML</th>
              <th>Deep Learning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Feature extraction</td>
              <td>Often requires more manual feature engineering.</td>
              <td>Can learn features automatically.</td>
            </tr>
            <tr>
              <td>Data requirement</td>
              <td>Some methods work well with smaller datasets.</td>
              <td>Often benefits from large datasets.</td>
            </tr>
            <tr>
              <td>Computational cost</td>
              <td>Often lower, depending on the model and dataset.</td>
              <td>Can require substantial computing resources.</td>
            </tr>
            <tr>
              <td>Typical applications</td>
              <td>Tabular prediction and many structured-data tasks.</td>
              <td>Images, audio, language, and other complex data.</td>
            </tr>
          </tbody>
        </table>

        <p>
          These are general tendencies, not strict rules. The
          best method depends on the problem, data, resources,
          and evaluation results.
        </p>
      </section>

      <section>
        <h2>7. Quick Summary</h2>

        <ul>
          <li><strong>AI:</strong> The broad field of creating systems that perform intelligent tasks.</li>
          <li><strong>ML:</strong> A subset of AI that learns patterns from data.</li>
          <li><strong>DL:</strong> A subset of ML that uses neural networks with multiple layers.</li>
          <li>Rule-based AI can work without learning from data.</li>
          <li>Traditional ML often uses manually selected features.</li>
          <li>Deep Learning can automatically learn useful features from data.</li>
          <li>Deep Learning often requires more data and computing power, though requirements vary.</li>
          <li>AI is broader than ML, and ML is broader than DL.</li>
        </ul>
      </section>

      <section>
        <h2>8. Revision Questions</h2>

        <ol>
          <li>Define Artificial Intelligence, Machine Learning, and Deep Learning.</li>
          <li>Explain the relationship between AI, ML, and DL.</li>
          <li>What is a rule-based system? Give one example.</li>
          <li>Why can it be difficult to solve complex problems using manually written rules?</li>
          <li>Explain how a supervised ML model learns from data and labels.</li>
          <li>Differentiate traditional programming from Machine Learning.</li>
          <li>What is an artificial neural network?</li>
          <li>Why is Deep Learning called "deep"?</li>
          <li>Explain feature engineering and automatic feature learning.</li>
          <li>Give three applications of Deep Learning.</li>
          <li>Does every AI system use ML? Explain your answer.</li>
          <li>Does every ML system use Deep Learning? Explain your answer.</li>
        </ol>
      </section>
    `
  },
};


// Automatically create a button for every lecture in the lectures object.
const notesArea = document.querySelector("#notes-area");
const existingButtons = [...document.querySelectorAll(".lecture-btn")];
const buttonContainer = existingButtons[0]?.parentElement || sidebar;

if (notesArea && buttonContainer) {
  // Remove old hard-coded lecture buttons. Their container remains in index.html.
  existingButtons.forEach(button => button.remove());

  // Generate buttons from the lecture data above.
  Object.keys(lectures).forEach(lectureNumber => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lecture-btn";
    button.dataset.lecture = lectureNumber;
    button.textContent = lectures[lectureNumber].title;
    buttonContainer.appendChild(button);
  });

  // One delegated click handler works for all current and future lecture buttons.
  buttonContainer.addEventListener("click", event => {
    const button = event.target.closest(".lecture-btn");
    if (!button || !buttonContainer.contains(button)) return;

    const lectureNumber = button.dataset.lecture;
    const lecture = lectures[lectureNumber];
    if (!lecture) return;

    // Clicking the open lecture again hides its notes.
    if (notesArea.dataset.openLecture === lectureNumber) {
      notesArea.innerHTML = "";
      delete notesArea.dataset.openLecture;
      button.classList.remove("active");
      return;
    }

    notesArea.innerHTML = `
      <h1>${lecture.title}</h1>
      ${lecture.content}
    `;

    notesArea.dataset.openLecture = lectureNumber;

    buttonContainer.querySelectorAll(".lecture-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
}