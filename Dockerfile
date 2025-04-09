# Ubuntuの最新版を使う
FROM ubuntu:latest

# 基本的なツールをインストール
RUN apt-get update && apt-get install -y \
    vim \
    less \
    man \
    sudo \
    && apt-get clean

# デフォルトで bash を使う
CMD ["/bin/bash"]
