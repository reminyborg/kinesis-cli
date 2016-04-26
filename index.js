#! /usr/bin/env node

var split = require('split')
var Transform = require('stream').Transform
var kinesis = require('kinesis')

var argv = require('minimist')(process.argv.slice(2))

var stream = kinesis.stream({name: argv._[0], oldest: argv.o })

var unpack = new Transform({objectMode: true})
unpack._transform = function(record, _, next) {
  next(null, record.Data.toString('ascii') + '\n')
}

if (process.stdin.isTTY) {
  stream.pipe(unpack).pipe(process.stdout)
} else {
  process.stdin.pipe(split()).pipe(stream)
}
