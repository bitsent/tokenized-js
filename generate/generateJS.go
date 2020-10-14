package main

//go:generate gopherjs build --minify

// This is an experiment to see if gopherjs can reasonably generate js code from go source
// so that we can have a single-source solution for keys and addresses.
// Use "go generate" to build this.

import (
	"github.com/gopherjs/gopherjs/js"
)

func main() {
	js.Module.Get("exports").Set("_concat_2_strings_", _concat_2_strings_)
}

func _concat_2_strings_(s1 string, s2 string) string {
	return s1 + s2;
}