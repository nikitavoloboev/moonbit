///|
fn main {
  read_file("cmd/main/main.mbt")
}

///|
fn learn_vars() -> Unit {
  println(@lib.fib(20))
  let a : Int = 10
  let b = 20
  println(a + b)
  let mut c = 10
  c = c + 1
  println(c)
  let d = 20
  // d = d + 1
  println(d)
}

///|
fn read_file(path : String) -> Unit {
  try {
    let b = @fs.read_file_to_string(path)
    println(b)
  } catch {
    e => println("Error: \{e}")
  }
}
