module 0x8675309::M {
    fun lambda_in_prog(x: u64) {
      let _ = |y| x + y;
    }
}
