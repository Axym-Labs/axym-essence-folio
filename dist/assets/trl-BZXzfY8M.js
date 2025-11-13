const e=`---\r
slug: trl\r
title: Temporal Regularized Learning\r
category: research\r
summary: A novel learning algorithm at the intersection of self-supervised and local learning\r
cover_image: /work/neural-architecture.jpg\r
use_cover_as_card_bg: true\r
show_cover_in_detail: false\r
external_url: https://axym.org/files/TRL.pdf\r
# main_points:\r
#   - [atom, local Learning Rule]\r
#   - [microchip, Online-Compatible]\r
#   - [brain, Self-Supervised Learning]\r
draft: false\r
date: 2025-11-13\r
rank: 1\r
links:\r
  - label: Repository\r
    url: https://github.com/axym-labs/trl\r
---\r
\r
Temporal Regularized Learning (TRL) is a compact, highly local and self-supervised prodecure\r
that optimizes each neuron individually. We adapt the self-supervised loss formulation of VICReg,\r
consisting of variance, invariance and covariance to input streams with sequential coherence and for\r
online-compatibility. It removes the need for biphasic updates, negatives or inner-loop convergence,\r
given three scalar leaky-integrators per neuron and an auxiliary lateral network. Knowledge about\r
downstream tasks can be injected through the sequence ordering, allowing for supervised training. We\r
present TRL and its simplified variant, TRL-S. Experiments on MNIST show TRL is competetive with\r
backpropagation, Forward-Forward and Equilibrium Propagation, while TRL-S achieves adequate\r
performace despite its simplified setup. We show TRL creates neurons with specialized receptive\r
fields at the first layer. In later layers, some neurons specialize in firing only for some types of input.\r
\r
Read the paper [here](https://axym.org/files/TRL.pdf)`;export{e as default};
