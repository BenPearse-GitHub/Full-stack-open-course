const Header = ({ courseName }) => <h1>{courseName}</h1>;

const Content = ({ parts }) => (
  <>
    {parts.map((part, i) => (
      <Part key={part.id} part={parts[i]} />
    ))}
  </>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ total }) => (
  <p>
    <b>Total of {total} exercises </b>
  </p>
);

const Course = ({ course }) => (
  <>
    <Header courseName={course.name} />
    <Content parts={course.parts} />
    <Total
      total={course.parts.reduce((acc, part) => acc + part.exercises, 0)}
    />
  </>
);

export default Course;
