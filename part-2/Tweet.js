function Tweet({username, name, date, message}) {
 return (
 <div className="tweet">
    <p>{username}</p>
    <p>{name}</p>
    <p>{date}</p>
    <p>{message}</p>
  </div>
  );
}