#kinesis-cli

A cli for the aws [kinesis node library](https://github.com/mhart/kinesis)

Currently only for piping to and from streams:

## Installing

```
npm install -g kinesis-cli
```

## Use

to pipe to a stream
```
echo testing | kinesis stream-name
```

to pipe from an stream
```
kinesis stream-name > file
```

## Options

`-o starts from oldest record in stream`
